"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const DebugFeature_1 = require("./feature/debug/DebugFeature");
const IdempotencyFeature_1 = require("./feature/idempotency/IdempotencyFeature");
const MetricsFeature_1 = require("./feature/metrics/MetricsFeature");
const PagingFeature_1 = require("./feature/paging/PagingFeature");
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    debug: DebugFeature_1.DebugFeature,
    idempotency: IdempotencyFeature_1.IdempotencyFeature,
    metrics: MetricsFeature_1.MetricsFeature,
    paging: PagingFeature_1.PagingFeature,
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'Intercom',
        slug: "intercom",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        debug: {
            "options": {
                "active": false,
                "max": 100,
                "redact": [
                    "authorization",
                    "cookie",
                    "set-cookie",
                    "api-key",
                    "apikey",
                    "x-api-key",
                    "idempotency-key"
                ]
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "onEntry": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "none"
        },
        idempotency: {
            "options": {
                "active": false,
                "header": "Idempotency-Key",
                "methods": [
                    "POST",
                    "PUT",
                    "PATCH",
                    "DELETE"
                ],
                "ops": [
                    "create",
                    "update",
                    "remove"
                ]
            },
            "optspec": {
                "keygen": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "none"
        },
        metrics: {
            "options": {
                "active": false
            },
            "optspec": {
                "now": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "none"
        },
        paging: {
            "options": {
                "active": false,
                "afterVar": "after",
                "cursorParam": "cursor",
                "firstVar": "first",
                "limitParam": "limit",
                "pageParam": "page",
                "startPage": 1
            },
            "optspec": {
                "limit": "`$NUMBER`",
                "ops": "`$LIST`"
            },
            "strict": false,
            "transport": "none"
        },
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://api.intercom.io",
        auth: {
            prefix: 'Bearer',
        },
        headers: {
            "content-type": "application/json"
        },
        entity: {
            activity_log: {},
            activity_log_event_type: {},
            activity_log_list: {},
            admin: {},
            admin_with_app: {},
            ai_call: {},
            ai_content: {},
            article: {},
            article_search: {},
            article_version: {},
            article_version_list: {},
            audience: {},
            away_status_reason: {},
            banner: {},
            banner_dismiss: {},
            brand: {},
            call: {},
            company: {},
            company_attached_contact: {},
            company_attached_segment: {},
            company_list: {},
            company_scroll: {},
            contact: {},
            contact_attached_company: {},
            contact_list: {},
            contact_segment: {},
            content: {},
            content_import_source: {},
            content_search: {},
            content_snippet: {},
            conversation: {},
            conversation_attribute: {},
            conversation_attribute_list: {},
            conversation_list: {},
            conversation_participant: {},
            custom_object_instance: {},
            data: {},
            data_attribute: {},
            data_connector: {},
            data_connector_execution_result: {},
            data_connector_execution_result_list: {},
            data_event: {},
            data_event_summary: {},
            data_export: {},
            deleted: {},
            deleted_article_object: {},
            deleted_company_object: {},
            deleted_data_connector_object: {},
            deleted_internal_article_object: {},
            deleted_object: {},
            email: {},
            external_page: {},
            fin_agent: {},
            handling_event: {},
            help_center: {},
            internal_article: {},
            internal_article_search: {},
            ip_allowlist: {},
            job: {},
            macro: {},
            merge_history: {},
            message: {},
            news_item: {},
            newsfeed: {},
            note: {},
            office_hour: {},
            office_hours_exception: {},
            office_hours_schedule: {},
            paginated: {},
            phone_switch: {},
            reporting_data: {},
            reporting_data_export: {},
            segment: {},
            side_conversation: {},
            subscription: {},
            subscription_type: {},
            tag: {},
            team: {},
            team_metric_list: {},
            ticket: {},
            ticket_list: {},
            ticket_reply: {},
            ticket_state: {},
            ticket_type: {},
            ticket_type_attribute: {},
            visitor: {},
            whatsapp_message_status: {},
            whatsapp_message_status_list: {},
            workflow: {},
        }
    };
    entity = {
        "activity_log": {
            "fields": [
                {
                    "name": "activity_description",
                    "short": "A sentence or two describing the activity.",
                    "type": "`$STRING`"
                },
                {
                    "name": "activity_type",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "created_at",
                    "short": "The time the activity was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "short": "The id representing the activity.",
                    "type": "`$STRING`"
                },
                {
                    "name": "metadata",
                    "short": "Additional data provided about Admin activity.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "performed_by",
                    "short": "Details about the Admin involved in the activity.",
                    "type": "`$OBJECT`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "activity_log",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "1677253093",
                                        "kind": "query",
                                        "name": "created_at_after",
                                        "orig": "created_at_after",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "1677861493",
                                        "kind": "query",
                                        "name": "created_at_before",
                                        "orig": "created_at_before",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/admins/activity_logs",
                            "segments": [
                                {
                                    "lit": "admins"
                                },
                                {
                                    "lit": "activity_logs"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "created_at_after",
                                    "created_at_before",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "admins",
                                "activity_logs"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "activity_log_event_type": {
            "fields": [
                {
                    "name": "event_types",
                    "short": "An array of activity log event type strings.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "type",
                    "short": "String representing the object's type.",
                    "type": "`$STRING`"
                }
            ],
            "name": "activity_log_event_type",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/admins/activity_log_event_types",
                            "segments": [
                                {
                                    "lit": "admins"
                                },
                                {
                                    "lit": "activity_log_event_types"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.event_types`"
                            },
                            "parts": [
                                "admins",
                                "activity_log_event_types"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "activity_log_list": {
            "fields": [
                {
                    "name": "activity_logs",
                    "short": "An array of activity logs",
                    "type": "`$ARRAY`"
                },
                {
                    "format": "date-time",
                    "name": "created_at_after",
                    "req": true,
                    "short": "The start date that you request data for.",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "date-time",
                    "name": "created_at_before",
                    "short": "The end date that you request data for.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "event_types",
                    "short": "An optional list of event types to filter activity logs by.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "page",
                    "short": "The page number of results to return.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "pages",
                    "short": "Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "per_page",
                    "short": "The number of results per page.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "type",
                    "short": "String representing the object's type.",
                    "type": "`$STRING`"
                }
            ],
            "name": "activity_log_list",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/admins/activity_logs/search",
                            "segments": [
                                {
                                    "lit": "admins"
                                },
                                {
                                    "lit": "activity_logs"
                                },
                                {
                                    "lit": "search"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "admins",
                                "activity_logs",
                                "search"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "admin": {
            "fields": [
                {
                    "format": "uri",
                    "name": "avatar",
                    "short": "Image for the associated team or teammate",
                    "type": "`$STRING`"
                },
                {
                    "name": "away_mode_enabled",
                    "short": "Identifies if this admin is currently set in away mode.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "away_mode_reassign",
                    "short": "Identifies if this admin is set to automatically reassign new conversations to the apps default inbox.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "away_status_reason_id",
                    "short": "The unique identifier of the away status reason",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "email",
                    "short": "The email of the admin.",
                    "type": "`$STRING`"
                },
                {
                    "name": "has_inbox_seat",
                    "short": "Identifies if this admin has a paid inbox seat to restrict/allow features that require them.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "id",
                    "short": "The id representing the admin.",
                    "type": "`$STRING`"
                },
                {
                    "name": "job_title",
                    "short": "The job title of the admin.",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "The name of the admin.",
                    "type": "`$STRING`"
                },
                {
                    "name": "role",
                    "short": "The role assigned to this admin.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "team_ids",
                    "short": "This object represents the avatar associated with the admin.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "team_priority_level",
                    "short": "Admin priority levels for teams",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "type",
                    "short": "String representing the object's type.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "admin",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": true,
                                        "kind": "query",
                                        "name": "display_avatar",
                                        "orig": "display_avatar",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/admins",
                            "segments": [
                                {
                                    "lit": "admins"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "display_avatar",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.admins`"
                            },
                            "parts": [
                                "admins"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 123,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "admin_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/admins/{admin_id}",
                            "rename": {
                                "param": {
                                    "admin_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "admins"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "admins",
                                "{id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "admin_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/admins/{admin_id}/away",
                            "rename": {
                                "param": {
                                    "admin_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "admins"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "away"
                                }
                            ],
                            "select": {
                                "$action": "away",
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "admins",
                                "{id}",
                                "away"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "admin_with_app": {
            "fields": [
                {
                    "name": "app",
                    "short": "App that the admin belongs to.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "avatar",
                    "short": "This object represents the avatar associated with the admin.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "away_mode_enabled",
                    "short": "Identifies if this admin is currently set in away mode.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "away_mode_reassign",
                    "short": "Identifies if this admin is set to automatically reassign new conversations to the apps default inbox.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "email",
                    "short": "The email of the admin.",
                    "type": "`$STRING`"
                },
                {
                    "name": "email_verified",
                    "short": "Identifies if this admin's email is verified.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "has_inbox_seat",
                    "short": "Identifies if this admin has a paid inbox seat to restrict/allow features that require them.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "id",
                    "short": "The id representing the admin.",
                    "type": "`$STRING`"
                },
                {
                    "name": "job_title",
                    "short": "The job title of the admin.",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "The name of the admin.",
                    "type": "`$STRING`"
                },
                {
                    "name": "team_ids",
                    "short": "This is a list of ids of the teams that this admin is part of.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "type",
                    "short": "String representing the object's type.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "admin_with_app",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/me",
                            "segments": [
                                {
                                    "lit": "me"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "me"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "ai_call": {
            "fields": [
                {
                    "name": "app_id",
                    "short": "The workspace identifier",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "call_id",
                    "req": true,
                    "short": "External call identifier from the call provider",
                    "type": "`$STRING`"
                },
                {
                    "name": "call_summary",
                    "short": "Summary of the call conversation, truncated to 256 characters.",
                    "type": "`$STRING`"
                },
                {
                    "name": "call_transcript",
                    "short": "Array of transcript entries for the call",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "data",
                    "short": "Additional metadata about the call",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "external_call_id",
                    "short": "The external call identifier from the call provider",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "The unique identifier for the external reference",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "intent",
                    "short": "Array of intent classifications for the call",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "intercom_call_id",
                    "short": "The Intercom call identifier, if the call has been matched",
                    "type": "`$STRING`"
                },
                {
                    "name": "intercom_conversation_id",
                    "short": "The Intercom conversation identifier, if a conversation has been created",
                    "type": "`$STRING`"
                },
                {
                    "name": "phone_number",
                    "req": true,
                    "short": "Phone number in E.164 format for the call",
                    "type": "`$STRING`"
                },
                {
                    "name": "source",
                    "short": "Source of the call.",
                    "type": "`$STRING`"
                },
                {
                    "name": "status",
                    "short": "Status of the call.",
                    "type": "`$STRING`"
                },
                {
                    "name": "user_phone_number",
                    "short": "Phone number in E.164 format for the call",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "ai_call",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/fin_voice/register",
                            "segments": [
                                {
                                    "lit": "fin_voice"
                                },
                                {
                                    "lit": "register"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "fin_voice",
                                "register"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "conversation_id",
                                        "orig": "conversation_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/fin_voice/conversation/{conversation_id}",
                            "segments": [
                                {
                                    "lit": "fin_voice"
                                },
                                {
                                    "lit": "conversation"
                                },
                                {
                                    "var": "conversation_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "conversation_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "fin_voice",
                                "conversation",
                                "{conversation_id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "external_id",
                                        "orig": "external_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/fin_voice/external_id/{external_id}",
                            "segments": [
                                {
                                    "lit": "fin_voice"
                                },
                                {
                                    "lit": "external_id"
                                },
                                {
                                    "var": "external_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "external_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "fin_voice",
                                "external_id",
                                "{external_id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/fin_voice/collect/{id}",
                            "segments": [
                                {
                                    "lit": "fin_voice"
                                },
                                {
                                    "lit": "collect"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "fin_voice",
                                "collect",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "conversation"
                    ],
                    [
                        "external_id"
                    ]
                ]
            }
        },
        "ai_content": {
            "fields": [],
            "name": "ai_content",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "source_id",
                                        "orig": "source_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/ai/content_import_sources/{source_id}",
                            "segments": [
                                {
                                    "lit": "ai"
                                },
                                {
                                    "lit": "content_import_sources"
                                },
                                {
                                    "var": "source_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version",
                                    "source_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "ai",
                                "content_import_sources",
                                "{source_id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "content_import_source"
                    ]
                ]
            }
        },
        "article": {
            "fields": [
                {
                    "name": "ai_chatbot_availability",
                    "short": "Whether the article should be available for AI Chatbot (Fin).",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "ai_copilot_availability",
                    "short": "Whether the article should be available for AI Copilot.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "ai_sales_agent_availability",
                    "short": "Whether the article should be available for AI Sales Agent.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "audience_ids",
                    "short": "The list of audience IDs to assign to this article for Fin AI Agent targeting.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "author_id",
                    "op": {
                        "list": {
                            "type": "`$INTEGER`"
                        },
                        "update": {
                            "type": "`$INTEGER`"
                        }
                    },
                    "req": true,
                    "short": "The id of the author of the article.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "body",
                    "short": "The content of the article in HTML.",
                    "type": "`$STRING`"
                },
                {
                    "name": "body_markdown",
                    "short": "The content of the article in markdown.",
                    "type": "`$STRING`"
                },
                {
                    "name": "conversions",
                    "short": "The number of conversations started from the article.",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "date-time",
                    "name": "created_at",
                    "short": "The time when the article was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "created_by_id",
                    "readOnly": true,
                    "short": "The ID of the teammate who created the article.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "default_locale",
                    "short": "The default locale of the help center.",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "short": "The description of the article.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "draft_updated_at",
                    "short": "The time, in seconds, when the staged draft was last edited, or `null` when there is no staged draft.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "exclude_from_article_suggestions",
                    "readOnly": true,
                    "short": "Whether the article is excluded from Fin AI Agent article suggestions.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "fin_involvements",
                    "readOnly": true,
                    "short": "The number of conversations in which Fin AI Agent used this article, summed across all of the article's locales.",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "float",
                    "name": "fin_resolution_rate",
                    "readOnly": true,
                    "short": "The percentage of Fin AI Agent involvements that resulted in a resolution (fin_resolutions / fin_involvements * 100).",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "fin_resolutions",
                    "readOnly": true,
                    "short": "The number of conversations Fin AI Agent resolved using this article, summed across all of the article's locales.",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "float",
                    "name": "happy_reaction_percentage",
                    "short": "The percentage of happy reactions the article has received against other types of reaction.",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "has_unpublished_changes",
                    "short": "Whether the published article has unpublished changes staged as a draft on top of its live content.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "help_center_audience",
                    "readOnly": true,
                    "short": "The audience that can view this article in the Help Center.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "The unique identifier for the article which is given by Intercom.",
                    "type": "`$STRING`"
                },
                {
                    "format": "float",
                    "name": "neutral_reaction_percentage",
                    "short": "The percentage of neutral reactions the article has received against other types of reaction.",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "parent_id",
                    "short": "The id of the article's parent collection or section.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "parent_ids",
                    "short": "The ids of the article's parent collections or sections.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "parent_type",
                    "short": "The type of parent, which can either be a `collection` or `section`.",
                    "type": "`$STRING`"
                },
                {
                    "name": "reactions",
                    "short": "The number of total reactions the article has received.",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "float",
                    "name": "sad_reaction_percentage",
                    "short": "The percentage of sad reactions the article has received against",
                    "type": "`$NUMBER`"
                },
                {
                    "format": "date-time",
                    "name": "scheduled_publish_at",
                    "readOnly": true,
                    "short": "ISO 8601 timestamp at which to schedule a future publish of the article.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "scheduled_unpublish_at",
                    "readOnly": true,
                    "short": "ISO 8601 timestamp at which to schedule a future unpublish of the article.",
                    "type": "`$STRING`"
                },
                {
                    "name": "state",
                    "short": "Whether the article will be `published` or will be a `draft`.",
                    "type": "`$STRING`"
                },
                {
                    "name": "tags",
                    "short": "A list of tags objects associated with a conversation",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "title",
                    "op": {
                        "list": {
                            "type": "`$STRING`"
                        },
                        "update": {
                            "type": "`$STRING`"
                        }
                    },
                    "req": true,
                    "short": "The title of the article.For multilingual articles, this will be the title of the default language's content.",
                    "type": "`$STRING`"
                },
                {
                    "name": "translated_content",
                    "short": "The Translated Content of an Article.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "type",
                    "short": "The type of object - `article_statistics`.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "updated_at",
                    "short": "The time when the article was last updated.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "updated_by_id",
                    "readOnly": true,
                    "short": "The ID of the teammate who last updated the article.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "url",
                    "short": "The URL of the article.",
                    "type": "`$STRING`"
                },
                {
                    "name": "views",
                    "short": "The number of total views the article has received.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "workspace_id",
                    "short": "The id of the workspace which the article belongs to.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "article",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 123,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/articles/{id}/draft/publish",
                            "segments": [
                                {
                                    "lit": "articles"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "draft"
                                },
                                {
                                    "lit": "publish"
                                }
                            ],
                            "select": {
                                "$action": "draft_publish",
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.statistics`"
                            },
                            "parts": [
                                "articles",
                                "{id}",
                                "draft",
                                "publish"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/articles",
                            "segments": [
                                {
                                    "lit": "articles"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.statistics`"
                            },
                            "parts": [
                                "articles"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 123,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/articles/{id}/draft",
                            "segments": [
                                {
                                    "lit": "articles"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "draft"
                                }
                            ],
                            "select": {
                                "$action": "draft",
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "articles",
                                "{id}",
                                "draft"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/articles",
                            "segments": [
                                {
                                    "lit": "articles"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "articles"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 123,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "article_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/articles/{article_id}",
                            "rename": {
                                "param": {
                                    "article_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "articles"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.statistics`"
                            },
                            "parts": [
                                "articles",
                                "{id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 123,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "article_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/articles/{article_id}",
                            "rename": {
                                "param": {
                                    "article_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "articles"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.statistics`"
                            },
                            "parts": [
                                "articles",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 123,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/articles/{id}/draft",
                            "segments": [
                                {
                                    "lit": "articles"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "draft"
                                }
                            ],
                            "select": {
                                "$action": "draft",
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.statistics`"
                            },
                            "parts": [
                                "articles",
                                "{id}",
                                "draft"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "article_search": {
            "fields": [
                {
                    "name": "data",
                    "short": "An object containing the results of the search.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "pages",
                    "short": "Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "total_count",
                    "short": "The total number of Articles matching the search query",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "type",
                    "short": "The type of the object - `list`.",
                    "type": "`$STRING`"
                }
            ],
            "name": "article_search",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": 123,
                                        "kind": "query",
                                        "name": "help_center_id",
                                        "orig": "help_center_id",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "highlight",
                                        "orig": "highlight",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "Getting started",
                                        "kind": "query",
                                        "name": "phrase",
                                        "orig": "phrase",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "published",
                                        "kind": "query",
                                        "name": "state",
                                        "orig": "state",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/articles/search",
                            "segments": [
                                {
                                    "lit": "articles"
                                },
                                {
                                    "lit": "search"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "help_center_id",
                                    "highlight",
                                    "intercom_version",
                                    "phrase",
                                    "state"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "articles",
                                "search"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "article_version": {
            "fields": [
                {
                    "name": "article_id",
                    "short": "The unique identifier of the article this version belongs to.",
                    "type": "`$STRING`"
                },
                {
                    "name": "author_id",
                    "short": "The id of the teammate listed as the article's author at this version.",
                    "type": "`$STRING`"
                },
                {
                    "name": "body",
                    "short": "The HTML body of the article at this version.",
                    "type": "`$STRING`"
                },
                {
                    "name": "body_markdown",
                    "short": "The Markdown body of the article at this version.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "created_at",
                    "short": "The time the version was created, as a UTC Unix timestamp.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "created_by_id",
                    "short": "The id of the teammate who created this version.",
                    "type": "`$STRING`"
                },
                {
                    "name": "created_via",
                    "short": "How this version was created (for example `web`, `api`).",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "short": "The description of the article at this version.",
                    "type": "`$STRING`"
                },
                {
                    "name": "from_version_id",
                    "short": "The id of the version this version was created from, or `null` if this is the first version.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "The unique identifier for the version.",
                    "type": "`$STRING`"
                },
                {
                    "name": "state",
                    "short": "Whether this version is the currently published version of the article (`published`) or an earlier non-live version (`draft`).",
                    "type": "`$STRING`"
                },
                {
                    "name": "title",
                    "short": "The title of the article at this version.",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "String representing the object's type.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "updated_at",
                    "short": "The time the version was last updated, as a UTC Unix timestamp.",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "article_version",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 123,
                                        "kind": "param",
                                        "name": "article_id",
                                        "orig": "article_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": "301",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "en",
                                        "kind": "query",
                                        "name": "locale",
                                        "orig": "locale",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/articles/{article_id}/versions/{id}",
                            "segments": [
                                {
                                    "lit": "articles"
                                },
                                {
                                    "var": "article_id"
                                },
                                {
                                    "lit": "versions"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "article_id",
                                    "id",
                                    "intercom_version",
                                    "locale"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "articles",
                                "{article_id}",
                                "versions",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "article"
                    ]
                ]
            }
        },
        "article_version_list": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "article_version_list",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 123,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "article_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "en",
                                        "kind": "query",
                                        "name": "locale",
                                        "orig": "locale",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 25,
                                        "kind": "query",
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/articles/{article_id}/versions",
                            "rename": {
                                "param": {
                                    "article_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "articles"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "versions"
                                }
                            ],
                            "select": {
                                "$action": "versions",
                                "exist": [
                                    "id",
                                    "intercom_version",
                                    "locale",
                                    "page",
                                    "per_page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "articles",
                                "{id}",
                                "versions"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "audience": {
            "fields": [
                {
                    "name": "created_at",
                    "readOnly": true,
                    "short": "The time the audience was created as a Unix timestamp.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "readOnly": true,
                    "short": "The unique identifier representing the audience.",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "The name of the audience.",
                    "type": "`$STRING`"
                },
                {
                    "name": "predicates",
                    "short": "The predicates that define which contacts belong to the audience.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "role_predicates",
                    "short": "Role-based predicates that further filter audience membership by contact role.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "type",
                    "readOnly": true,
                    "short": "The type of object.",
                    "type": "`$STRING`"
                },
                {
                    "name": "updated_at",
                    "readOnly": true,
                    "short": "The time the audience was last updated as a Unix timestamp.",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "audience",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/audiences",
                            "segments": [
                                {
                                    "lit": "audiences"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "audiences"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 50,
                                        "kind": "query",
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/audiences",
                            "segments": [
                                {
                                    "lit": "audiences"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version",
                                    "page",
                                    "per_page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "audiences"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/audiences/{id}",
                            "segments": [
                                {
                                    "lit": "audiences"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "audiences",
                                "{id}"
                            ]
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/audiences/{id}",
                            "segments": [
                                {
                                    "lit": "audiences"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "audiences",
                                "{id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/audiences/{id}",
                            "segments": [
                                {
                                    "lit": "audiences"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "audiences",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "away_status_reason": {
            "fields": [
                {
                    "name": "created_at",
                    "short": "The Unix timestamp when the status reason was created",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "deleted",
                    "short": "Whether the status reason has been soft deleted",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "emoji",
                    "short": "The emoji associated with the status reason",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "The unique identifier for the away status reason",
                    "type": "`$STRING`"
                },
                {
                    "name": "label",
                    "short": "The display text for the away status reason",
                    "type": "`$STRING`"
                },
                {
                    "name": "order",
                    "short": "The display order of the status reason",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "type",
                    "type": "`$STRING`"
                },
                {
                    "name": "updated_at",
                    "short": "The Unix timestamp when the status reason was last updated",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "away_status_reason",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/away_status_reasons",
                            "segments": [
                                {
                                    "lit": "away_status_reasons"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "away_status_reasons"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "banner": {
            "fields": [
                {
                    "name": "action",
                    "short": "The action a contact can take on the banner, or `null` when the banner has no action.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "body",
                    "short": "The banner's body content as HTML.",
                    "type": "`$STRING`"
                },
                {
                    "name": "client_targeting",
                    "short": "Reserved for future use.",
                    "type": "`$ARRAY`"
                },
                {
                    "format": "timestamp",
                    "name": "created_at",
                    "short": "The time the contact's view of this banner was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "short": "The id of the banner.",
                    "type": "`$STRING`"
                },
                {
                    "name": "position",
                    "short": "Where the banner is positioned.",
                    "type": "`$STRING`"
                },
                {
                    "name": "show_dismiss_button",
                    "short": "Whether the banner should display a dismiss control.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "style",
                    "short": "How the banner is displayed.",
                    "type": "`$STRING`"
                },
                {
                    "name": "title",
                    "short": "The banner's title.",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "String representing the object's type.",
                    "type": "`$STRING`"
                },
                {
                    "name": "view_id",
                    "short": "The id of the contact's view of this banner.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "banner",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "contact_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/contacts/{id}/banners",
                            "rename": {
                                "param": {
                                    "id": "contact_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "contacts"
                                },
                                {
                                    "var": "contact_id"
                                },
                                {
                                    "lit": "banners"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "contact_id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "contacts",
                                "{contact_id}",
                                "banners"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "contact"
                    ]
                ]
            }
        },
        "banner_dismiss": {
            "fields": [
                {
                    "name": "dismissed",
                    "short": "Whether the banner view is dismissed.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "String representing the object's type.",
                    "type": "`$STRING`"
                },
                {
                    "name": "view_id",
                    "short": "The id of the dismissed banner view.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "banner_dismiss",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "contact_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "view_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/contacts/{id}/banners/{view_id}/dismiss",
                            "rename": {
                                "param": {
                                    "id": "contact_id",
                                    "view_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "contacts"
                                },
                                {
                                    "var": "contact_id"
                                },
                                {
                                    "lit": "banners"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "dismiss"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "contact_id",
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "contacts",
                                "{contact_id}",
                                "banners",
                                "{id}",
                                "dismiss"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "contact"
                    ]
                ]
            }
        },
        "brand": {
            "fields": [
                {
                    "format": "date-time",
                    "name": "created_at",
                    "short": "Unix timestamp of brand creation",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "default_address_settings_id",
                    "short": "Default email settings ID for this brand",
                    "type": "`$STRING`"
                },
                {
                    "name": "help_center_id",
                    "short": "Associated help center identifier",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "Unique brand identifier.",
                    "type": "`$STRING`"
                },
                {
                    "name": "is_default",
                    "short": "Whether this is the workspace's default brand",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "name",
                    "short": "Display name of the brand",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "The type of object",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "updated_at",
                    "short": "Unix timestamp of last modification",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "brand",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/brands",
                            "segments": [
                                {
                                    "lit": "brands"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "brands"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/brands/{id}",
                            "segments": [
                                {
                                    "lit": "brands"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "brands",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "call": {
            "fields": [
                {
                    "name": "admin_id",
                    "short": "The id of the admin associated with the call, if any.",
                    "type": "`$STRING`"
                },
                {
                    "name": "answered_at",
                    "type": "`$ANY`",
                    "union": {
                        "branches": 2,
                        "count": 1,
                        "depth": 0
                    }
                },
                {
                    "name": "call_type",
                    "short": "The type of call.",
                    "type": "`$STRING`"
                },
                {
                    "name": "contact_id",
                    "short": "The id of the contact associated with the call, if any.",
                    "type": "`$STRING`"
                },
                {
                    "name": "conversation_id",
                    "short": "The id of the conversation associated with the call, if any.",
                    "type": "`$STRING`"
                },
                {
                    "name": "created_at",
                    "type": "`$ANY`",
                    "union": {
                        "branches": 2,
                        "count": 1,
                        "depth": 0
                    }
                },
                {
                    "name": "direction",
                    "short": "The direction of the call.",
                    "type": "`$STRING`"
                },
                {
                    "name": "ended_at",
                    "type": "`$ANY`",
                    "union": {
                        "branches": 2,
                        "count": 1,
                        "depth": 0
                    }
                },
                {
                    "name": "ended_reason",
                    "short": "The reason for the call end, if applicable.",
                    "type": "`$STRING`"
                },
                {
                    "format": "uri",
                    "name": "fin_recording_url",
                    "short": "API URL to the AI Agent (Fin) call recording if available.",
                    "type": "`$STRING`"
                },
                {
                    "format": "uri",
                    "name": "fin_transcription_url",
                    "short": "API URL to the AI Agent (Fin) call transcript if available.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "The id of the call.",
                    "type": "`$STRING`"
                },
                {
                    "name": "initiated_at",
                    "type": "`$ANY`",
                    "union": {
                        "branches": 2,
                        "count": 1,
                        "depth": 0
                    }
                },
                {
                    "name": "phone",
                    "short": "The phone number involved in the call, in E.164 format.",
                    "type": "`$STRING`"
                },
                {
                    "format": "uri",
                    "name": "recording_url",
                    "short": "API URL to download or redirect to the call recording if available.",
                    "type": "`$STRING`"
                },
                {
                    "name": "state",
                    "short": "The current state of the call.",
                    "type": "`$STRING`"
                },
                {
                    "format": "uri",
                    "name": "transcription_url",
                    "short": "API URL to download or redirect to the call transcript if available.",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "String representing the object's type.",
                    "type": "`$STRING`"
                },
                {
                    "name": "updated_at",
                    "type": "`$ANY`",
                    "union": {
                        "branches": 2,
                        "count": 1,
                        "depth": 0
                    }
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "call",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/calls/search",
                            "segments": [
                                {
                                    "lit": "calls"
                                },
                                {
                                    "lit": "search"
                                }
                            ],
                            "select": {
                                "$action": "search",
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "calls",
                                "search"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 25,
                                        "kind": "query",
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/calls",
                            "segments": [
                                {
                                    "lit": "calls"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version",
                                    "page",
                                    "per_page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "calls"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "call_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/calls/{call_id}",
                            "rename": {
                                "param": {
                                    "call_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "calls"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "calls",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "call_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/calls/{call_id}/recording",
                            "rename": {
                                "param": {
                                    "call_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "calls"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "recording"
                                }
                            ],
                            "select": {
                                "$action": "recording",
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "calls",
                                "{id}",
                                "recording"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "call_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/calls/{call_id}/transcript",
                            "rename": {
                                "param": {
                                    "call_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "calls"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "transcript"
                                }
                            ],
                            "select": {
                                "$action": "transcript",
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "calls",
                                "{id}",
                                "transcript"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "phone_number",
                                        "orig": "phone_number",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/fin_voice/phone_number/{phone_number}",
                            "segments": [
                                {
                                    "lit": "fin_voice"
                                },
                                {
                                    "lit": "phone_number"
                                },
                                {
                                    "var": "phone_number"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "phone_number"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "fin_voice",
                                "phone_number",
                                "{phone_number}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "phone_number"
                    ]
                ]
            }
        },
        "company": {
            "fields": [
                {
                    "name": "app_id",
                    "short": "The Intercom defined code of the workspace the company is associated to.",
                    "type": "`$STRING`"
                },
                {
                    "name": "company_id",
                    "short": "The company id you have defined for the company.",
                    "type": "`$STRING`"
                },
                {
                    "name": "created_at",
                    "short": "The time the company was added in Intercom.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "custom_attributes",
                    "short": "The custom attributes you have set on the company.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "id",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "The Intercom defined id representing the company.",
                    "type": "`$STRING`"
                },
                {
                    "name": "industry",
                    "short": "The industry that the company operates in.",
                    "type": "`$STRING`"
                },
                {
                    "name": "last_request_at",
                    "short": "The time the company last recorded making a request.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "monthly_spend",
                    "short": "How much revenue the company generates for your business.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "short": "The name of the company.",
                    "type": "`$STRING`"
                },
                {
                    "name": "notes",
                    "short": "The list of notes associated with the company",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "plan",
                    "short": "The name of the plan you have associated with the company.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "remote_created_at",
                    "short": "The time the company was created by you.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "segments",
                    "short": "The list of segments associated with the company",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "session_count",
                    "short": "How many sessions the company has recorded.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "size",
                    "short": "The number of employees in the company.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "tags",
                    "short": "The list of tags associated with the company",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "type",
                    "short": "Value is `company`",
                    "type": "`$STRING`"
                },
                {
                    "name": "update_last_request_at",
                    "short": "Set to true to update the company's last seen time to now.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "updated_at",
                    "short": "The last time the company was updated.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "user_count",
                    "short": "The number of users in the company.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "website",
                    "short": "The URL for the company website.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "company",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "contact_id",
                                        "orig": "contact_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/contacts/{contact_id}/companies",
                            "segments": [
                                {
                                    "lit": "contacts"
                                },
                                {
                                    "var": "contact_id"
                                },
                                {
                                    "lit": "companies"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "contact_id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "contacts",
                                "{contact_id}",
                                "companies"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/companies",
                            "segments": [
                                {
                                    "lit": "companies"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "companies"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "12345",
                                        "kind": "query",
                                        "name": "company_id",
                                        "orig": "company_id",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "my company",
                                        "kind": "query",
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 15,
                                        "kind": "query",
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": "98765",
                                        "kind": "query",
                                        "name": "segment_id",
                                        "orig": "segment_id",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "678910",
                                        "kind": "query",
                                        "name": "tag_id",
                                        "orig": "tag_id",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/companies",
                            "segments": [
                                {
                                    "lit": "companies"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "company_id",
                                    "intercom_version",
                                    "name",
                                    "page",
                                    "per_page",
                                    "segment_id",
                                    "tag_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "companies"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/companies/{company_id}",
                            "rename": {
                                "param": {
                                    "company_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "companies"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "companies",
                                "{id}"
                            ]
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "58a430d35458202d41b1e65b",
                                        "kind": "param",
                                        "name": "contact_id",
                                        "orig": "contact_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "58a430d35458202d41b1e65b",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/contacts/{contact_id}/companies/{company_id}",
                            "rename": {
                                "param": {
                                    "company_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "contacts"
                                },
                                {
                                    "var": "contact_id"
                                },
                                {
                                    "lit": "companies"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "contact_id",
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "contacts",
                                "{contact_id}",
                                "companies",
                                "{id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/companies/{company_id}",
                            "rename": {
                                "param": {
                                    "company_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "companies"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "companies",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "contact"
                    ]
                ]
            }
        },
        "company_attached_contact": {
            "fields": [
                {
                    "name": "android_app_name",
                    "short": "The name of the Android app which the contact is using.",
                    "type": "`$STRING`"
                },
                {
                    "name": "android_app_version",
                    "short": "The version of the Android app which the contact is using.",
                    "type": "`$STRING`"
                },
                {
                    "name": "android_device",
                    "short": "The Android device which the contact is using.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "android_last_seen_at",
                    "short": "(Unix timestamp in seconds) The time when the contact was last seen on an Android device.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "android_os_version",
                    "short": "The version of the Android OS which the contact is using.",
                    "type": "`$STRING`"
                },
                {
                    "name": "android_sdk_version",
                    "short": "The version of the Android SDK which the contact is using.",
                    "type": "`$STRING`"
                },
                {
                    "name": "avatar",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "browser",
                    "short": "The name of the browser which the contact is using.",
                    "type": "`$STRING`"
                },
                {
                    "name": "browser_language",
                    "short": "The language set by the browser which the contact is using.",
                    "type": "`$STRING`"
                },
                {
                    "name": "browser_version",
                    "short": "The version of the browser which the contact is using.",
                    "type": "`$STRING`"
                },
                {
                    "name": "companies",
                    "short": "An object with metadata about companies attached to a contact .",
                    "type": "`$OBJECT`"
                },
                {
                    "format": "date-time",
                    "name": "created_at",
                    "short": "(Unix timestamp in seconds) The time when the contact was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "custom_attributes",
                    "short": "The custom attributes which are set for the contact.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "email",
                    "short": "The contact's email.",
                    "type": "`$STRING`"
                },
                {
                    "name": "email_domain",
                    "short": "The contact's email domain.",
                    "type": "`$STRING`"
                },
                {
                    "name": "external_id",
                    "short": "The unique identifier for the contact which is provided by the Client.",
                    "type": "`$STRING`"
                },
                {
                    "name": "has_hard_bounced",
                    "short": "Whether the contact has had an email sent to them hard bounce.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "id",
                    "short": "The unique identifier for the contact which is given by Intercom.",
                    "type": "`$STRING`"
                },
                {
                    "name": "ios_app_name",
                    "short": "The name of the iOS app which the contact is using.",
                    "type": "`$STRING`"
                },
                {
                    "name": "ios_app_version",
                    "short": "The version of the iOS app which the contact is using.",
                    "type": "`$STRING`"
                },
                {
                    "name": "ios_device",
                    "short": "The iOS device which the contact is using.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "ios_last_seen_at",
                    "short": "(Unix timestamp in seconds) The last time the contact used the iOS app.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "ios_os_version",
                    "short": "The version of iOS which the contact is using.",
                    "type": "`$STRING`"
                },
                {
                    "name": "ios_sdk_version",
                    "short": "The version of the iOS SDK which the contact is using.",
                    "type": "`$STRING`"
                },
                {
                    "name": "language_override",
                    "short": "A preferred language setting for the contact, used by the Intercom Messenger even if their browser settings change.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "last_contacted_at",
                    "short": "(Unix timestamp in seconds) The time when the contact was last messaged.",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "date-time",
                    "name": "last_email_clicked_at",
                    "short": "(Unix timestamp in seconds) The time when the contact last clicked a link in an email.",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "date-time",
                    "name": "last_email_opened_at",
                    "short": "(Unix timestamp in seconds) The time when the contact last opened an email.",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "date-time",
                    "name": "last_replied_at",
                    "short": "(Unix timestamp in seconds) The time when the contact last messaged in.",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "date-time",
                    "name": "last_seen_at",
                    "short": "(Unix timestamp in seconds) The time when the contact was last seen (either where the Intercom Messenger was installed or when specified manually).",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "location",
                    "short": "An object containing location meta data about a Intercom contact.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "marked_email_as_spam",
                    "short": "Whether the contact has marked an email sent to them as spam.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "merge_history",
                    "short": "A list of contacts that were merged into this contact.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "name",
                    "short": "The contacts name.",
                    "type": "`$STRING`"
                },
                {
                    "name": "notes",
                    "short": "An object containing notes meta data about the notes that a contact has.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "os",
                    "short": "The operating system which the contact is using.",
                    "type": "`$STRING`"
                },
                {
                    "name": "owner_id",
                    "short": "The id of an admin that has been assigned account ownership of the contact.",
                    "type": "`$STRING`"
                },
                {
                    "name": "phone",
                    "short": "The contacts phone.",
                    "type": "`$STRING`"
                },
                {
                    "name": "role",
                    "short": "The role of the contact.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "signed_up_at",
                    "short": "(Unix timestamp in seconds) The time specified for when a contact signed up.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "social_profiles",
                    "short": "An object containing social profiles that a contact has.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "tags",
                    "short": "An object containing tags meta data about the tags that a contact has.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "type",
                    "short": "The type of object.",
                    "type": "`$STRING`"
                },
                {
                    "name": "unsubscribed_from_emails",
                    "short": "Whether the contact is unsubscribed from emails.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "format": "date-time",
                    "name": "updated_at",
                    "short": "(Unix timestamp in seconds) The time when the contact was last updated.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "workspace_id",
                    "short": "The id of the workspace which the contact belongs to.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "company_attached_contact",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/companies/{company_id}/contacts",
                            "rename": {
                                "param": {
                                    "company_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "companies"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "contacts"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "companies",
                                "{id}",
                                "contacts"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "company_attached_segment": {
            "fields": [
                {
                    "name": "count",
                    "short": "The number of items in the user segment.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "created_at",
                    "short": "The time the segment was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "short": "The unique identifier representing the segment.",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "The name of the segment.",
                    "type": "`$STRING`"
                },
                {
                    "name": "person_type",
                    "short": "Type of the contact: contact (lead) or user.",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "The type of object.",
                    "type": "`$STRING`"
                },
                {
                    "name": "updated_at",
                    "short": "The time the segment was updated.",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "company_attached_segment",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/companies/{company_id}/segments",
                            "rename": {
                                "param": {
                                    "company_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "companies"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "segments"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "companies",
                                "{id}",
                                "segments"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "company_list": {
            "fields": [
                {
                    "name": "data",
                    "short": "An array containing Company Objects.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "pages",
                    "short": "Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "total_count",
                    "short": "The total number of companies.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "type",
                    "short": "The type of object - `list`.",
                    "type": "`$STRING`"
                }
            ],
            "name": "company_list",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "desc",
                                        "kind": "query",
                                        "name": "order",
                                        "orig": "order",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 15,
                                        "kind": "query",
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/companies/list",
                            "segments": [
                                {
                                    "lit": "companies"
                                },
                                {
                                    "lit": "list"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version",
                                    "order",
                                    "page",
                                    "per_page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "companies",
                                "list"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "company_scroll": {
            "fields": [
                {
                    "name": "app_id",
                    "short": "The Intercom defined code of the workspace the company is associated to.",
                    "type": "`$STRING`"
                },
                {
                    "name": "company_id",
                    "short": "The company id you have defined for the company.",
                    "type": "`$STRING`"
                },
                {
                    "name": "created_at",
                    "short": "The time the company was added in Intercom.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "custom_attributes",
                    "short": "The custom attributes you have set on the company.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "id",
                    "short": "The Intercom defined id representing the company.",
                    "type": "`$STRING`"
                },
                {
                    "name": "industry",
                    "short": "The industry that the company operates in.",
                    "type": "`$STRING`"
                },
                {
                    "name": "last_request_at",
                    "short": "The time the company last recorded making a request.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "monthly_spend",
                    "short": "How much revenue the company generates for your business.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "short": "The name of the company.",
                    "type": "`$STRING`"
                },
                {
                    "name": "notes",
                    "short": "The list of notes associated with the company",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "plan",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "remote_created_at",
                    "short": "The time the company was created by you.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "segments",
                    "short": "The list of segments associated with the company",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "session_count",
                    "short": "How many sessions the company has recorded.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "size",
                    "short": "The number of employees in the company.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "tags",
                    "short": "The list of tags associated with the company",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "type",
                    "short": "Value is `company`",
                    "type": "`$STRING`"
                },
                {
                    "name": "updated_at",
                    "short": "The last time the company was updated.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "user_count",
                    "short": "The number of users in the company.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "website",
                    "short": "The URL for the company website.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "company_scroll",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "scroll_param",
                                        "orig": "scroll_param",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/companies/scroll",
                            "segments": [
                                {
                                    "lit": "companies"
                                },
                                {
                                    "lit": "scroll"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version",
                                    "scroll_param"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "companies",
                                "scroll"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "contact": {
            "fields": [
                {
                    "name": "android_app_name",
                    "short": "The name of the Android app which the contact is using.",
                    "type": "`$STRING`"
                },
                {
                    "name": "android_app_version",
                    "short": "The version of the Android app which the contact is using.",
                    "type": "`$STRING`"
                },
                {
                    "name": "android_device",
                    "short": "The Android device which the contact is using.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "android_last_seen_at",
                    "short": "(Unix timestamp in seconds) The time when the contact was last seen on an Android device.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "android_os_version",
                    "short": "The version of the Android OS which the contact is using.",
                    "type": "`$STRING`"
                },
                {
                    "name": "android_sdk_version",
                    "short": "The version of the Android SDK which the contact is using.",
                    "type": "`$STRING`"
                },
                {
                    "name": "avatar",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "browser",
                    "short": "The name of the browser which the contact is using.",
                    "type": "`$STRING`"
                },
                {
                    "name": "browser_language",
                    "short": "The language set by the browser which the contact is using.",
                    "type": "`$STRING`"
                },
                {
                    "name": "browser_version",
                    "short": "The version of the browser which the contact is using.",
                    "type": "`$STRING`"
                },
                {
                    "name": "companies",
                    "short": "An object with metadata about companies attached to a contact .",
                    "type": "`$OBJECT`"
                },
                {
                    "format": "date-time",
                    "name": "created_at",
                    "short": "(Unix timestamp in seconds) The time when the contact was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "custom_attributes",
                    "short": "The custom attributes which are set for the contact.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "email",
                    "short": "The contact's email.",
                    "type": "`$STRING`"
                },
                {
                    "name": "email_domain",
                    "short": "The contact's email domain.",
                    "type": "`$STRING`"
                },
                {
                    "name": "enabled_push_messaging",
                    "short": "If the user has enabled push messaging.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "external_id",
                    "short": "The unique identifier for the contact which is provided by the Client.",
                    "type": "`$STRING`"
                },
                {
                    "name": "has_hard_bounced",
                    "short": "Whether the contact has had an email sent to them hard bounce.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "id",
                    "short": "The unique identifier for the contact which is given by Intercom.",
                    "type": "`$STRING`"
                },
                {
                    "name": "ios_app_name",
                    "short": "The name of the iOS app which the contact is using.",
                    "type": "`$STRING`"
                },
                {
                    "name": "ios_app_version",
                    "short": "The version of the iOS app which the contact is using.",
                    "type": "`$STRING`"
                },
                {
                    "name": "ios_device",
                    "short": "The iOS device which the contact is using.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "ios_last_seen_at",
                    "short": "(Unix timestamp in seconds) The last time the contact used the iOS app.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "ios_os_version",
                    "short": "The version of iOS which the contact is using.",
                    "type": "`$STRING`"
                },
                {
                    "name": "ios_sdk_version",
                    "short": "The version of the iOS SDK which the contact is using.",
                    "type": "`$STRING`"
                },
                {
                    "name": "language_override",
                    "short": "A preferred language setting for the contact, used by the Intercom Messenger even if their browser settings change.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "last_contacted_at",
                    "short": "(Unix timestamp in seconds) The time when the contact was last messaged.",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "date-time",
                    "name": "last_email_clicked_at",
                    "short": "(Unix timestamp in seconds) The time when the contact last clicked a link in an email.",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "date-time",
                    "name": "last_email_opened_at",
                    "short": "(Unix timestamp in seconds) The time when the contact last opened an email.",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "date-time",
                    "name": "last_replied_at",
                    "short": "(Unix timestamp in seconds) The time when the contact last messaged in.",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "date-time",
                    "name": "last_seen_at",
                    "short": "(Unix timestamp in seconds) The time when the contact was last seen (either where the Intercom Messenger was installed or when specified manually).",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "location",
                    "short": "An object containing location meta data about a Intercom contact.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "marked_email_as_spam",
                    "short": "Whether the contact has marked an email sent to them as spam.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "merge_history",
                    "short": "A list of contacts that were merged into this contact.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "name",
                    "short": "The contacts name.",
                    "type": "`$STRING`"
                },
                {
                    "name": "notes",
                    "short": "An object containing notes meta data about the notes that a contact has.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "os",
                    "short": "The operating system which the contact is using.",
                    "type": "`$STRING`"
                },
                {
                    "name": "owner_id",
                    "short": "The id of an admin that has been assigned account ownership of the contact.",
                    "type": "`$STRING`"
                },
                {
                    "name": "phone",
                    "short": "The contacts phone.",
                    "type": "`$STRING`"
                },
                {
                    "name": "role",
                    "short": "The role of the contact.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "signed_up_at",
                    "short": "(Unix timestamp in seconds) The time specified for when a contact signed up.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "social_profiles",
                    "short": "An object containing social profiles that a contact has.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "tags",
                    "short": "An object containing tags meta data about the tags that a contact has.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "type",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "The type of object.",
                    "type": "`$STRING`"
                },
                {
                    "name": "unsubscribed_from_emails",
                    "short": "Whether the contact is unsubscribed from emails.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "format": "date-time",
                    "name": "updated_at",
                    "short": "(Unix timestamp in seconds) The time when the contact was last updated.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "user",
                    "req": true,
                    "short": "The unique identifiers retained after converting or merging.",
                    "type": "`$OBJECT`",
                    "union": {
                        "branches": 2,
                        "count": 1,
                        "depth": 0
                    }
                },
                {
                    "name": "visitor",
                    "req": true,
                    "short": "The unique identifiers to convert a single Visitor.",
                    "type": "`$OBJECT`",
                    "union": {
                        "branches": 3,
                        "count": 1,
                        "depth": 0
                    }
                },
                {
                    "name": "workspace_id",
                    "short": "The id of the workspace which the contact belongs to.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "contact",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "63a07ddf05a32042dffac965",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "contact_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/contacts/{contact_id}/archive",
                            "rename": {
                                "param": {
                                    "contact_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "contacts"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "archive"
                                }
                            ],
                            "select": {
                                "$action": "archive",
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "contacts",
                                "{id}",
                                "archive"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "63a07ddf05a32042dffac965",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "contact_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/contacts/{contact_id}/block",
                            "rename": {
                                "param": {
                                    "contact_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "contacts"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "block"
                                }
                            ],
                            "select": {
                                "$action": "block",
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "contacts",
                                "{id}",
                                "block"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "include_merge_history",
                                        "orig": "include_merge_history",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/contacts/merge",
                            "segments": [
                                {
                                    "lit": "contacts"
                                },
                                {
                                    "lit": "merge"
                                }
                            ],
                            "select": {
                                "$action": "merge",
                                "exist": [
                                    "include_merge_history",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "contacts",
                                "merge"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "63a07ddf05a32042dffac965",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "contact_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/contacts/{contact_id}/unarchive",
                            "rename": {
                                "param": {
                                    "contact_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "contacts"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "unarchive"
                                }
                            ],
                            "select": {
                                "$action": "unarchive",
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "contacts",
                                "{id}",
                                "unarchive"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/contacts",
                            "segments": [
                                {
                                    "lit": "contacts"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "contacts"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/visitors/convert",
                            "segments": [
                                {
                                    "lit": "visitors"
                                },
                                {
                                    "lit": "convert"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "visitors",
                                "convert"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "include_merge_history",
                                        "orig": "include_merge_history",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/contacts",
                            "segments": [
                                {
                                    "lit": "contacts"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "include_merge_history",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "contacts"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "cdd29344-5e0c-4ef0-ac56-f9ba2979bc27",
                                        "kind": "param",
                                        "name": "external_id",
                                        "orig": "external_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "include_merge_history",
                                        "orig": "include_merge_history",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/contacts/find_by_external_id/{external_id}",
                            "segments": [
                                {
                                    "lit": "contacts"
                                },
                                {
                                    "lit": "find_by_external_id"
                                },
                                {
                                    "var": "external_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "external_id",
                                    "include_merge_history",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "contacts",
                                "find_by_external_id",
                                "{external_id}"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "63a07ddf05a32042dffac965",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "contact_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "include_merge_history",
                                        "orig": "include_merge_history",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/contacts/{contact_id}",
                            "rename": {
                                "param": {
                                    "contact_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "contacts"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "include_merge_history",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "contacts",
                                "{id}"
                            ]
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "contact_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/contacts/{contact_id}",
                            "rename": {
                                "param": {
                                    "contact_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "contacts"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "contacts",
                                "{id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "63a07ddf05a32042dffac965",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "contact_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "include_merge_history",
                                        "orig": "include_merge_history",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/contacts/{contact_id}",
                            "rename": {
                                "param": {
                                    "contact_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "contacts"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "include_merge_history",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "contacts",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "find_by_external_id"
                    ]
                ]
            }
        },
        "contact_attached_company": {
            "fields": [
                {
                    "name": "app_id",
                    "short": "The Intercom defined code of the workspace the company is associated to.",
                    "type": "`$STRING`"
                },
                {
                    "name": "company_id",
                    "short": "The company id you have defined for the company.",
                    "type": "`$STRING`"
                },
                {
                    "name": "created_at",
                    "short": "The time the company was added in Intercom.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "custom_attributes",
                    "short": "The custom attributes you have set on the company.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "id",
                    "short": "The Intercom defined id representing the company.",
                    "type": "`$STRING`"
                },
                {
                    "name": "industry",
                    "short": "The industry that the company operates in.",
                    "type": "`$STRING`"
                },
                {
                    "name": "last_request_at",
                    "short": "The time the company last recorded making a request.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "monthly_spend",
                    "short": "How much revenue the company generates for your business.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "short": "The name of the company.",
                    "type": "`$STRING`"
                },
                {
                    "name": "notes",
                    "short": "The list of notes associated with the company",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "plan",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "remote_created_at",
                    "short": "The time the company was created by you.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "segments",
                    "short": "The list of segments associated with the company",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "session_count",
                    "short": "How many sessions the company has recorded.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "size",
                    "short": "The number of employees in the company.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "tags",
                    "short": "The list of tags associated with the company",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "type",
                    "short": "Value is `company`",
                    "type": "`$STRING`"
                },
                {
                    "name": "updated_at",
                    "short": "The last time the company was updated.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "user_count",
                    "short": "The number of users in the company.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "website",
                    "short": "The URL for the company website.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "contact_attached_company",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "63a07ddf05a32042dffac965",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "contact_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/contacts/{contact_id}/companies",
                            "rename": {
                                "param": {
                                    "contact_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "contacts"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "companies"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "contacts",
                                "{id}",
                                "companies"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "contact_list": {
            "fields": [
                {
                    "name": "data",
                    "short": "The list of contact objects",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "pages",
                    "short": "Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "pagination",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "query",
                    "req": true,
                    "type": "`$ANY`",
                    "union": {
                        "branches": 4,
                        "count": 4,
                        "depth": 7
                    }
                },
                {
                    "name": "sort",
                    "short": "An optional object to sort the results by.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "total_count",
                    "short": "A count of the total number of objects.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "type",
                    "short": "Always list",
                    "type": "`$STRING`"
                }
            ],
            "name": "contact_list",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "include_merge_history",
                                        "orig": "include_merge_history",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/contacts/search",
                            "segments": [
                                {
                                    "lit": "contacts"
                                },
                                {
                                    "lit": "search"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "include_merge_history",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "contacts",
                                "search"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "contact_segment": {
            "fields": [
                {
                    "name": "count",
                    "short": "The number of items in the user segment.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "created_at",
                    "short": "The time the segment was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "short": "The unique identifier representing the segment.",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "The name of the segment.",
                    "type": "`$STRING`"
                },
                {
                    "name": "person_type",
                    "short": "Type of the contact: contact (lead) or user.",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "The type of object.",
                    "type": "`$STRING`"
                },
                {
                    "name": "updated_at",
                    "short": "The time the segment was updated.",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "contact_segment",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "63a07ddf05a32042dffac965",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "contact_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/contacts/{contact_id}/segments",
                            "rename": {
                                "param": {
                                    "contact_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "contacts"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "segments"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "contacts",
                                "{id}",
                                "segments"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "content": {
            "fields": [],
            "name": "content",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/content/bulk_actions",
                            "segments": [
                                {
                                    "lit": "content"
                                },
                                {
                                    "lit": "bulk_actions"
                                }
                            ],
                            "select": {
                                "$action": "bulk_action",
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "content",
                                "bulk_actions"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "content_import_source": {
            "fields": [
                {
                    "name": "apply_audience_to_existing_content",
                    "short": "When true, the audience will be applied to all existing external pages belonging to this content import source.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "audience_ids",
                    "short": "The unique identifiers for the audiences associated with this content import source.",
                    "type": "`$ARRAY`"
                },
                {
                    "format": "date-time",
                    "name": "created_at",
                    "req": true,
                    "short": "The time when the content import source was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "req": true,
                    "short": "The unique identifier for the content import source which is given by Intercom.",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "date-time",
                    "name": "last_synced_at",
                    "req": true,
                    "short": "The time when the content import source was last synced.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "status",
                    "op": {
                        "create": {
                            "type": "`$STRING`"
                        },
                        "update": {
                            "type": "`$STRING`"
                        }
                    },
                    "req": true,
                    "short": "The status of the content import source.",
                    "type": "`$STRING`"
                },
                {
                    "name": "sync_behavior",
                    "req": true,
                    "short": "If you intend to create or update External Pages via the API, this should be set to `api`.",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "req": true,
                    "short": "Always external_page",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "updated_at",
                    "req": true,
                    "short": "The time when the content import source was last updated.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "url",
                    "req": true,
                    "short": "The URL of the root of the external source.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "content_import_source",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/ai/content_import_sources",
                            "segments": [
                                {
                                    "lit": "ai"
                                },
                                {
                                    "lit": "content_import_sources"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "ai",
                                "content_import_sources"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/ai/content_import_sources",
                            "segments": [
                                {
                                    "lit": "ai"
                                },
                                {
                                    "lit": "content_import_sources"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "ai",
                                "content_import_sources"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "source_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/ai/content_import_sources/{source_id}",
                            "rename": {
                                "param": {
                                    "source_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "ai"
                                },
                                {
                                    "lit": "content_import_sources"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "ai",
                                "content_import_sources",
                                "{id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "source_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/ai/content_import_sources/{source_id}",
                            "rename": {
                                "param": {
                                    "source_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "ai"
                                },
                                {
                                    "lit": "content_import_sources"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "ai",
                                "content_import_sources",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "content_search": {
            "fields": [
                {
                    "name": "data",
                    "short": "The list of matched content items.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "pages",
                    "short": "Pagination metadata, including links to neighbouring pages.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "total_count",
                    "short": "Total number of results matching the query.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "type",
                    "short": "Always `list`.",
                    "type": "`$STRING`"
                }
            ],
            "name": "content_search",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "1,2,3",
                                        "kind": "query",
                                        "name": "any_tag_id",
                                        "orig": "any_tag_id",
                                        "type": "`$ARRAY`"
                                    },
                                    {
                                        "example": "article,snippet",
                                        "kind": "query",
                                        "name": "content_type",
                                        "orig": "content_type",
                                        "type": "`$ARRAY`"
                                    },
                                    {
                                        "example": "on",
                                        "kind": "query",
                                        "name": "copilot_state",
                                        "orig": "copilot_state",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1677253093,
                                        "kind": "query",
                                        "name": "created_at_after",
                                        "orig": "created_at_after",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 1677861493,
                                        "kind": "query",
                                        "name": "created_at_before",
                                        "orig": "created_at_before",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": "991267464,991267465",
                                        "kind": "query",
                                        "name": "created_by_id",
                                        "orig": "created_by_id",
                                        "type": "`$ARRAY`"
                                    },
                                    {
                                        "example": "on",
                                        "kind": "query",
                                        "name": "fin_sales_state",
                                        "orig": "fin_sales_state",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "on",
                                        "kind": "query",
                                        "name": "fin_service_state",
                                        "orig": "fin_service_state",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "folder",
                                        "kind": "query",
                                        "name": "folder_entity_type",
                                        "orig": "folder_entity_type",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "10,20",
                                        "kind": "query",
                                        "name": "folder_id",
                                        "orig": "folder_id",
                                        "type": "`$ARRAY`"
                                    },
                                    {
                                        "example": "991267464,991267465",
                                        "kind": "query",
                                        "name": "last_updated_by_id",
                                        "orig": "last_updated_by_id",
                                        "type": "`$ARRAY`"
                                    },
                                    {
                                        "example": "en,fr",
                                        "kind": "query",
                                        "name": "locale",
                                        "orig": "locale",
                                        "type": "`$ARRAY`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 10,
                                        "kind": "query",
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": "billing",
                                        "kind": "query",
                                        "name": "query",
                                        "orig": "query",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "published,draft",
                                        "kind": "query",
                                        "name": "state",
                                        "orig": "state",
                                        "type": "`$ARRAY`"
                                    },
                                    {
                                        "example": "1,2,3",
                                        "kind": "query",
                                        "name": "tag_id",
                                        "orig": "tag_id",
                                        "type": "`$ARRAY`"
                                    },
                                    {
                                        "example": "IN",
                                        "kind": "query",
                                        "name": "tag_operator",
                                        "orig": "tag_operator",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1677253093,
                                        "kind": "query",
                                        "name": "updated_at_after",
                                        "orig": "updated_at_after",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 1677861493,
                                        "kind": "query",
                                        "name": "updated_at_before",
                                        "orig": "updated_at_before",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/content/search",
                            "segments": [
                                {
                                    "lit": "content"
                                },
                                {
                                    "lit": "search"
                                }
                            ],
                            "select": {
                                "exist": [
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
                                    "updated_at_before"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "content",
                                "search"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "content_snippet": {
            "fields": [
                {
                    "name": "ai_chatbot_availability",
                    "short": "Whether the content snippet is available for AI Chatbot (Fin).",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "ai_copilot_availability",
                    "short": "Whether the content snippet is available for AI Copilot.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "ai_sales_agent_availability",
                    "short": "Whether the content snippet is available for AI Sales Agent.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "audience_ids",
                    "short": "The list of audience IDs this content snippet is targeted to for Fin AI Agent.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "body_markdown",
                    "short": "The body of the content snippet in markdown.",
                    "type": "`$STRING`"
                },
                {
                    "deprecated": true,
                    "name": "chatbot_availability",
                    "short": "Deprecated.",
                    "type": "`$INTEGER`"
                },
                {
                    "deprecated": true,
                    "name": "copilot_availability",
                    "short": "Deprecated.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "created_at",
                    "short": "The time the snippet was created as a UNIX timestamp.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "short": "The unique identifier for the content snippet.",
                    "type": "`$STRING`"
                },
                {
                    "name": "json_blocks",
                    "short": "The content blocks that make up the body of the snippet.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "locale",
                    "short": "The locale of the content snippet.",
                    "type": "`$STRING`"
                },
                {
                    "name": "title",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "The title of the content snippet.",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "String representing the object's type.",
                    "type": "`$STRING`"
                },
                {
                    "name": "updated_at",
                    "short": "The time the snippet was last updated as a UNIX timestamp.",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "content_snippet",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/content_snippets",
                            "segments": [
                                {
                                    "lit": "content_snippets"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "content_snippets"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 20,
                                        "kind": "query",
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/content_snippets",
                            "segments": [
                                {
                                    "lit": "content_snippets"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version",
                                    "page",
                                    "per_page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "content_snippets"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/content_snippets/{id}",
                            "segments": [
                                {
                                    "lit": "content_snippets"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "content_snippets",
                                "{id}"
                            ]
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/content_snippets/{id}",
                            "segments": [
                                {
                                    "lit": "content_snippets"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "content_snippets",
                                "{id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/content_snippets/{id}",
                            "segments": [
                                {
                                    "lit": "content_snippets"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "content_snippets",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "conversation": {
            "fields": [
                {
                    "name": "admin_assignee_id",
                    "short": "The id of the admin assigned to the conversation.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "ai_agent",
                    "short": "Data related to AI Agent involvement in the conversation.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "ai_agent_participated",
                    "short": "Indicates whether the AI Agent participated in the conversation.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "attachment_urls",
                    "short": "A list of image URLs that will be added as attachments.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "body",
                    "req": true,
                    "short": "The content of the message.",
                    "type": "`$STRING`"
                },
                {
                    "name": "brand_id",
                    "short": "The unique identifier of the brand to associate with this conversation.",
                    "type": "`$STRING`"
                },
                {
                    "name": "channel",
                    "short": "The channel through which the conversation was initiated and its current channel.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "company",
                    "short": "The company associated with the conversation.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "company_id",
                    "short": "The ID of the company that the conversation is associated with.",
                    "type": "`$STRING`"
                },
                {
                    "name": "contacts",
                    "short": "The list of contacts (users or leads) involved in this conversation.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "conversation_id",
                    "req": true,
                    "short": "The unique identifier (given by Intercom) for the conversation or customer ticket to link to the tracker ticket.",
                    "type": "`$STRING`"
                },
                {
                    "name": "conversation_parts",
                    "short": "A list of Conversation Part objects for each part message in the conversation.",
                    "type": "`$OBJECT`",
                    "union": {
                        "branches": 6,
                        "count": 1,
                        "depth": 5
                    }
                },
                {
                    "name": "conversation_rating",
                    "short": "The Conversation Rating object which contains information on the rating and/or remark added by a Contact and the Admin assigned to the conversation.",
                    "type": "`$OBJECT`"
                },
                {
                    "format": "date-time",
                    "name": "created_at",
                    "short": "The time the conversation was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "custom_attributes",
                    "short": "An object containing the different custom attributes associated to the conversation as key-value pairs.",
                    "type": "`$OBJECT`",
                    "union": {
                        "branches": 4,
                        "count": 2,
                        "depth": 3
                    }
                },
                {
                    "name": "external_references",
                    "short": "References linking this conversation to records in an external helpdesk or CRM system.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "first_contact_reply",
                    "short": "An object containing information on the first users message.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "from",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "id",
                    "short": "The id representing the conversation.",
                    "type": "`$STRING`"
                },
                {
                    "name": "linked_objects",
                    "short": "An object containing metadata about linked conversations and linked tickets.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "monitor_evaluations",
                    "short": "QA monitor evaluations that flagged this conversation.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "open",
                    "short": "Indicates whether a conversation is open (true) or closed (false).",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "priority",
                    "short": "The priority level of the conversation.",
                    "type": "`$STRING`"
                },
                {
                    "name": "read",
                    "short": "Indicates whether a conversation has been read.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "sales_agent",
                    "short": "Data related to Sales Agent involvement in the conversation.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "sales_agent_participated",
                    "short": "Indicates whether the Sales Agent participated in the conversation.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "scorecards",
                    "short": "QA scorecard results for this conversation.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "sla_applied",
                    "short": "The SLA Applied object contains the details for which SLA has been applied to this conversation.",
                    "type": "`$OBJECT`"
                },
                {
                    "format": "date-time",
                    "name": "snoozed_until",
                    "short": "If set this is the time in the future when this conversation will be marked as open.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "source",
                    "short": "The type of the conversation part that started this conversation.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "state",
                    "short": "Can be set to \"open\", \"closed\" or \"snoozed\".",
                    "type": "`$STRING`"
                },
                {
                    "name": "statistics",
                    "short": "A Statistics object containing all information required for reporting, with timestamps and calculated metrics.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "subject",
                    "short": "The title of the email.",
                    "type": "`$STRING`"
                },
                {
                    "name": "tags",
                    "short": "A list of tags objects associated with a conversation",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "team_assignee_id",
                    "short": "The id of the team assigned to the conversation.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "teammates",
                    "short": "The list of teammates who participated in the conversation (wrote at least one conversation part).",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "title",
                    "short": "The title given to the conversation.",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "Always conversation.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "updated_at",
                    "short": "The last time the conversation was updated.",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "date-time",
                    "name": "waiting_since",
                    "short": "The last time a Contact responded to an Admin.",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "conversation",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/conversations/{id}/merge",
                            "segments": [
                                {
                                    "lit": "conversations"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "merge"
                                }
                            ],
                            "select": {
                                "$action": "merge",
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "conversations",
                                "{id}",
                                "merge"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "conversation_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/conversations/{conversation_id}/parts",
                            "rename": {
                                "param": {
                                    "conversation_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "conversations"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "parts"
                                }
                            ],
                            "select": {
                                "$action": "part",
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "conversations",
                                "{id}",
                                "parts"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123 or \"last\"",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "conversation_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/conversations/{conversation_id}/reply",
                            "rename": {
                                "param": {
                                    "conversation_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "conversations"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "reply"
                                }
                            ],
                            "select": {
                                "$action": "reply",
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "conversations",
                                "{id}",
                                "reply"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "64619700005694",
                                        "kind": "param",
                                        "name": "ticket_id",
                                        "orig": "ticket_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/tickets/{ticket_id}/linked_conversations",
                            "segments": [
                                {
                                    "lit": "tickets"
                                },
                                {
                                    "var": "ticket_id"
                                },
                                {
                                    "lit": "linked_conversations"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version",
                                    "ticket_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "tickets",
                                "{ticket_id}",
                                "linked_conversations"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/conversations",
                            "segments": [
                                {
                                    "lit": "conversations"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "conversations"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/conversations/redact",
                            "segments": [
                                {
                                    "lit": "conversations"
                                },
                                {
                                    "lit": "redact"
                                }
                            ],
                            "select": {
                                "$action": "redact",
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "conversations",
                                "redact"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": 20,
                                        "kind": "query",
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "starting_after",
                                        "orig": "starting_after",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/conversations",
                            "segments": [
                                {
                                    "lit": "conversations"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version",
                                    "per_page",
                                    "starting_after"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "conversations"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 123,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "conversation_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "plaintext",
                                        "kind": "query",
                                        "name": "display_a",
                                        "orig": "display_a",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": true,
                                        "kind": "query",
                                        "name": "include_translation",
                                        "orig": "include_translation",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/conversations/{conversation_id}",
                            "rename": {
                                "param": {
                                    "conversation_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "conversations"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "display_a",
                                    "id",
                                    "include_translation",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "conversations",
                                "{id}"
                            ]
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "conversation_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": true,
                                        "kind": "query",
                                        "name": "retain_metric",
                                        "orig": "retain_metric",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/conversations/{conversation_id}",
                            "rename": {
                                "param": {
                                    "conversation_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "conversations"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version",
                                    "retain_metric"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "conversations",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "204",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "64619700005694",
                                        "kind": "param",
                                        "name": "ticket_id",
                                        "orig": "ticket_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/tickets/{ticket_id}/linked_conversations/{id}",
                            "segments": [
                                {
                                    "lit": "tickets"
                                },
                                {
                                    "var": "ticket_id"
                                },
                                {
                                    "lit": "linked_conversations"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version",
                                    "ticket_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "tickets",
                                "{ticket_id}",
                                "linked_conversations",
                                "{id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 123,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "conversation_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "plaintext",
                                        "kind": "query",
                                        "name": "display_a",
                                        "orig": "display_a",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/conversations/{conversation_id}",
                            "rename": {
                                "param": {
                                    "conversation_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "conversations"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "display_a",
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "conversations",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "ticket"
                    ]
                ]
            }
        },
        "conversation_attribute": {
            "fields": [
                {
                    "name": "admin_id",
                    "type": "`$STRING`"
                },
                {
                    "name": "archived",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "created_at",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "data_type",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "short": "Readable description of the attribute.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "label",
                    "req": true,
                    "short": "The label for the new option.",
                    "type": "`$STRING`"
                },
                {
                    "name": "multiline",
                    "short": "(String data type only) Whether this string attribute is multiline.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "name",
                    "short": "Name of the attribute.",
                    "type": "`$STRING`"
                },
                {
                    "name": "reference",
                    "req": true,
                    "short": "(Relationship data type only) Reference configuration for related objects.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "required",
                    "short": "Whether this attribute is required.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "type",
                    "type": "`$STRING`"
                },
                {
                    "name": "updated_at",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "visible_to_team_ids",
                    "short": "Team IDs that can see this attribute.",
                    "type": "`$ARRAY`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "conversation_attribute",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 2,
                                        "kind": "param",
                                        "name": "attribute_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/conversations/attributes/{id}/options",
                            "rename": {
                                "param": {
                                    "id": "attribute_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "conversations"
                                },
                                {
                                    "lit": "attributes"
                                },
                                {
                                    "var": "attribute_id"
                                },
                                {
                                    "lit": "options"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "attribute_id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "conversations",
                                "attributes",
                                "{attribute_id}",
                                "options"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/conversations/attributes",
                            "segments": [
                                {
                                    "lit": "conversations"
                                },
                                {
                                    "lit": "attributes"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "conversations",
                                "attributes"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 3,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/conversations/attributes/{id}",
                            "segments": [
                                {
                                    "lit": "conversations"
                                },
                                {
                                    "lit": "attributes"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "conversations",
                                "attributes",
                                "{id}"
                            ]
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 2,
                                        "kind": "param",
                                        "name": "attribute_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
                                        "kind": "param",
                                        "name": "option_id",
                                        "orig": "option_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/conversations/attributes/{id}/options/{option_id}",
                            "rename": {
                                "param": {
                                    "id": "attribute_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "conversations"
                                },
                                {
                                    "lit": "attributes"
                                },
                                {
                                    "var": "attribute_id"
                                },
                                {
                                    "lit": "options"
                                },
                                {
                                    "var": "option_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "attribute_id",
                                    "intercom_version",
                                    "option_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "conversations",
                                "attributes",
                                "{attribute_id}",
                                "options",
                                "{option_id}"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 8,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/conversations/attributes/{id}",
                            "segments": [
                                {
                                    "lit": "conversations"
                                },
                                {
                                    "lit": "attributes"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "conversations",
                                "attributes",
                                "{id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 2,
                                        "kind": "param",
                                        "name": "attribute_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
                                        "kind": "param",
                                        "name": "option_id",
                                        "orig": "option_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/conversations/attributes/{id}/options/{option_id}",
                            "rename": {
                                "param": {
                                    "id": "attribute_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "conversations"
                                },
                                {
                                    "lit": "attributes"
                                },
                                {
                                    "var": "attribute_id"
                                },
                                {
                                    "lit": "options"
                                },
                                {
                                    "var": "option_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "attribute_id",
                                    "intercom_version",
                                    "option_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "conversations",
                                "attributes",
                                "{attribute_id}",
                                "options",
                                "{option_id}"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 8,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/conversations/attributes/{id}",
                            "segments": [
                                {
                                    "lit": "conversations"
                                },
                                {
                                    "lit": "attributes"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "conversations",
                                "attributes",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "attribute"
                    ],
                    [
                        "attribute",
                        "option"
                    ]
                ]
            }
        },
        "conversation_attribute_list": {
            "fields": [
                {
                    "name": "data",
                    "short": "A list of conversation attributes.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "type",
                    "short": "The type of the object.",
                    "type": "`$STRING`"
                }
            ],
            "name": "conversation_attribute_list",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "include_archived",
                                        "orig": "include_archived",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/conversations/attributes",
                            "segments": [
                                {
                                    "lit": "conversations"
                                },
                                {
                                    "lit": "attributes"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "include_archived",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "conversations",
                                "attributes"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "conversation_list": {
            "fields": [
                {
                    "name": "conversations",
                    "short": "The list of conversation objects",
                    "type": "`$ARRAY`",
                    "union": {
                        "branches": 4,
                        "count": 2,
                        "depth": 6
                    }
                },
                {
                    "name": "pages",
                    "short": "Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "pagination",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "query",
                    "req": true,
                    "type": "`$ANY`",
                    "union": {
                        "branches": 4,
                        "count": 4,
                        "depth": 7
                    }
                },
                {
                    "name": "total_count",
                    "short": "A count of the total number of objects.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "type",
                    "short": "Always conversation.list",
                    "type": "`$STRING`"
                }
            ],
            "name": "conversation_list",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": true,
                                        "kind": "query",
                                        "name": "include_monitor",
                                        "orig": "include_monitor",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": true,
                                        "kind": "query",
                                        "name": "include_scorecard",
                                        "orig": "include_scorecard",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/conversations/search",
                            "segments": [
                                {
                                    "lit": "conversations"
                                },
                                {
                                    "lit": "search"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "include_monitor",
                                    "include_scorecard",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "conversations",
                                "search"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "conversation_participant": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "conversation_participant",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "conversation_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/conversations/{conversation_id}/customers",
                            "rename": {
                                "param": {
                                    "conversation_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "conversations"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "customers"
                                }
                            ],
                            "select": {
                                "$action": "customers",
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "conversations",
                                "{id}",
                                "customers"
                            ]
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "contact_id",
                                        "orig": "contact_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "conversation_id",
                                        "orig": "conversation_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/conversations/{conversation_id}/customers/{contact_id}",
                            "segments": [
                                {
                                    "lit": "conversations"
                                },
                                {
                                    "var": "conversation_id"
                                },
                                {
                                    "lit": "customers"
                                },
                                {
                                    "var": "contact_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "contact_id",
                                    "conversation_id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "conversations",
                                "{conversation_id}",
                                "customers",
                                "{contact_id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "conversation",
                        "customer"
                    ]
                ]
            }
        },
        "custom_object_instance": {
            "fields": [
                {
                    "name": "created_at",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "custom_attributes",
                    "short": "The custom attributes which are set for the Custom Object instance.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "data",
                    "short": "An array of Custom Object Instance objects.",
                    "type": "`$ARRAY`"
                },
                {
                    "format": "date-time",
                    "name": "external_created_at",
                    "short": "The time when the Custom Object instance was created in the external system it originated from.",
                    "type": "`$STRING`"
                },
                {
                    "name": "external_id",
                    "short": "A unique identifier for the Custom Object instance in the external system it originated from.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "external_updated_at",
                    "short": "The time when the Custom Object instance was last updated in the external system it originated from.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "pages",
                    "short": "The majority of list resources in the API are paginated to allow clients to traverse data over multiple requests.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "total_count",
                    "short": "A count of the total number of custom object instances.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "type",
                    "short": "The type of the object - `list`.",
                    "type": "`$STRING`"
                },
                {
                    "name": "updated_at",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id",
                "parts": [
                    "custom_object_type_identifier",
                    "custom_object_instance_id"
                ],
                "sep": "/"
            },
            "name": "custom_object_instance",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "Order",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "custom_object_type_identifier",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/custom_object_instances/{custom_object_type_identifier}",
                            "rename": {
                                "param": {
                                    "custom_object_type_identifier": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "custom_object_instances"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.custom_attributes`"
                            },
                            "parts": [
                                "custom_object_instances",
                                "{id}"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "Order",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "custom_object_type_identifier",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "external_id",
                                        "orig": "external_id",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "references_contact_id",
                                        "orig": "references_contact_id",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "references_conversation_id",
                                        "orig": "references_conversation_id",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/custom_object_instances/{custom_object_type_identifier}",
                            "rename": {
                                "param": {
                                    "custom_object_type_identifier": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "custom_object_instances"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "external_id",
                                    "id",
                                    "intercom_version",
                                    "page",
                                    "per_page",
                                    "references_contact_id",
                                    "references_conversation_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "custom_object_instances",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "custom_object_instance_id",
                                        "orig": "custom_object_instance_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "Order",
                                        "kind": "param",
                                        "name": "custom_object_type_identifier",
                                        "orig": "custom_object_type_identifier",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/custom_object_instances/{custom_object_type_identifier}/{custom_object_instance_id}",
                            "segments": [
                                {
                                    "lit": "custom_object_instances"
                                },
                                {
                                    "var": "custom_object_type_identifier"
                                },
                                {
                                    "var": "custom_object_instance_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "custom_object_instance_id",
                                    "custom_object_type_identifier",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.custom_attributes`"
                            },
                            "parts": [
                                "custom_object_instances",
                                "{custom_object_type_identifier}",
                                "{custom_object_instance_id}"
                            ]
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "custom_object_instance_id",
                                        "orig": "custom_object_instance_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "Order",
                                        "kind": "param",
                                        "name": "custom_object_type_identifier",
                                        "orig": "custom_object_type_identifier",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/custom_object_instances/{custom_object_type_identifier}/{custom_object_instance_id}",
                            "segments": [
                                {
                                    "lit": "custom_object_instances"
                                },
                                {
                                    "var": "custom_object_type_identifier"
                                },
                                {
                                    "var": "custom_object_instance_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "custom_object_instance_id",
                                    "custom_object_type_identifier",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "custom_object_instances",
                                "{custom_object_type_identifier}",
                                "{custom_object_instance_id}"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "Order",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "custom_object_type_identifier",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "external_id",
                                        "orig": "external_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/custom_object_instances/{custom_object_type_identifier}",
                            "rename": {
                                "param": {
                                    "custom_object_type_identifier": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "custom_object_instances"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "external_id",
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "custom_object_instances",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "custom_object_instance"
                    ]
                ]
            }
        },
        "data": {
            "fields": [
                {
                    "name": "created_at_after",
                    "req": true,
                    "short": "The start date that you request data for.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "created_at_before",
                    "req": true,
                    "short": "The end date that you request data for.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "download_expires_at",
                    "short": "The time after which you will not be able to access the data.",
                    "type": "`$STRING`"
                },
                {
                    "name": "download_url",
                    "short": "The location where you can download your data.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "job_identifier",
                    "short": "The identifier for your job.",
                    "type": "`$STRING`"
                },
                {
                    "name": "status",
                    "short": "The current state of your job.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "data",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/export/content/data",
                            "segments": [
                                {
                                    "lit": "export"
                                },
                                {
                                    "lit": "content"
                                },
                                {
                                    "lit": "data"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "export",
                                "content",
                                "data"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "job_identifier",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/download/content/data/{job_identifier}",
                            "rename": {
                                "param": {
                                    "job_identifier": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "download"
                                },
                                {
                                    "lit": "content"
                                },
                                {
                                    "lit": "data"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "download",
                                "content",
                                "data",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "job_identifier",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/export/content/data/{job_identifier}",
                            "rename": {
                                "param": {
                                    "job_identifier": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "export"
                                },
                                {
                                    "lit": "content"
                                },
                                {
                                    "lit": "data"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "export",
                                "content",
                                "data",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "data_attribute": {
            "fields": [
                {
                    "name": "admin_id",
                    "short": "Teammate who created the attribute.",
                    "type": "`$STRING`"
                },
                {
                    "name": "api_writable",
                    "short": "Can this attribute be updated through API",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "archived",
                    "short": "Is this attribute archived.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "format": "date-time",
                    "name": "created_at",
                    "short": "The time the attribute was created as a UTC Unix timestamp",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "custom",
                    "short": "Set to true if this is a CDA",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "data_type",
                    "short": "The data type of the attribute.",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "short": "Readable description of the attribute.",
                    "type": "`$STRING`"
                },
                {
                    "name": "full_name",
                    "short": "Full name of the attribute.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "The unique identifier for the data attribute which is given by Intercom.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "label",
                    "short": "Readable name of the attribute (i.e.",
                    "type": "`$STRING`"
                },
                {
                    "name": "messenger_writable",
                    "short": "Can this attribute be updated by the Messenger",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "model",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "Value is `contact` for user/lead attributes and `company` for company attributes.",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "Name of the attribute.",
                    "type": "`$STRING`"
                },
                {
                    "name": "options",
                    "short": "List of predefined options for attribute value.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "type",
                    "short": "Value is `data_attribute`.",
                    "type": "`$STRING`"
                },
                {
                    "name": "ui_writable",
                    "short": "Can this attribute be updated in the UI",
                    "type": "`$BOOLEAN`"
                },
                {
                    "format": "date-time",
                    "name": "updated_at",
                    "short": "The time the attribute was last updated as a UTC Unix timestamp",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "data_attribute",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/data_attributes",
                            "segments": [
                                {
                                    "lit": "data_attributes"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "data_attributes"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "include_archived",
                                        "orig": "include_archived",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "company",
                                        "kind": "query",
                                        "name": "model",
                                        "orig": "model",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/data_attributes",
                            "segments": [
                                {
                                    "lit": "data_attributes"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "include_archived",
                                    "intercom_version",
                                    "model"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "data_attributes"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 1,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "data_attribute_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/data_attributes/{data_attribute_id}",
                            "rename": {
                                "param": {
                                    "data_attribute_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "data_attributes"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "data_attributes",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "data_connector": {
            "fields": [
                {
                    "name": "audiences",
                    "short": "The audience types this connector targets.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "body",
                    "short": "The request body template.",
                    "type": "`$STRING`"
                },
                {
                    "name": "bypass_authentication",
                    "short": "Whether authentication is bypassed for this connector.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "client_function_name",
                    "short": "The name of the client-side function, if applicable.",
                    "type": "`$STRING`"
                },
                {
                    "name": "client_function_timeout_ms",
                    "short": "Timeout in milliseconds for the client function, if applicable.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "configuration_response_type",
                    "short": "The expected response format from the connector.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "created_at",
                    "short": "The time the data connector was created.",
                    "type": "`$STRING`"
                },
                {
                    "name": "created_by_admin_id",
                    "short": "The ID of the admin who created this connector.",
                    "type": "`$STRING`"
                },
                {
                    "name": "customer_authentication",
                    "short": "Whether OTP authentication is enabled for this connector.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "data_inputs",
                    "short": "The input parameters accepted by this data connector.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "data_transformation_type",
                    "short": "The type of data transformation applied to the response.",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "short": "A description of what this data connector does.",
                    "type": "`$STRING`"
                },
                {
                    "name": "direct_fin_usage",
                    "short": "Whether this connector is used directly by Fin.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "execution_results_url",
                    "short": "The URL path to fetch execution results for this connector.",
                    "type": "`$STRING`"
                },
                {
                    "name": "execution_type",
                    "short": "How the connector executes.",
                    "type": "`$STRING`"
                },
                {
                    "name": "headers",
                    "short": "HTTP headers for the request.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "http_method",
                    "short": "The HTTP method used by the data connector.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "The unique identifier for the data connector.",
                    "type": "`$STRING`"
                },
                {
                    "name": "mock_response",
                    "short": "A sample JSON response from the external API.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "name",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "The name of the data connector.",
                    "type": "`$STRING`"
                },
                {
                    "name": "object_mappings",
                    "short": "Mappings from connector response objects to Intercom objects.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "response_fields",
                    "short": "The fields returned in the connector response.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "state",
                    "short": "The current state of the data connector.",
                    "type": "`$STRING`"
                },
                {
                    "name": "token_ids",
                    "short": "IDs of authentication tokens associated with this connector.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "type",
                    "short": "The type of object - `data_connector`.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "updated_at",
                    "short": "The time the data connector was last updated.",
                    "type": "`$STRING`"
                },
                {
                    "name": "updated_by_admin_id",
                    "short": "The ID of the admin who last updated this connector.",
                    "type": "`$STRING`"
                },
                {
                    "name": "url",
                    "short": "The URL of the external API endpoint.",
                    "type": "`$STRING`"
                },
                {
                    "name": "validate_missing_attributes",
                    "short": "Whether to validate missing attributes before execution.",
                    "type": "`$BOOLEAN`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "data_connector",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/data_connectors",
                            "segments": [
                                {
                                    "lit": "data_connectors"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "data_connectors"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": 20,
                                        "kind": "query",
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "starting_after",
                                        "orig": "starting_after",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/data_connectors",
                            "segments": [
                                {
                                    "lit": "data_connectors"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version",
                                    "per_page",
                                    "starting_after"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "data_connectors"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "12345",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "live",
                                        "kind": "query",
                                        "name": "state_version",
                                        "orig": "state_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/data_connectors/{id}",
                            "segments": [
                                {
                                    "lit": "data_connectors"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version",
                                    "state_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "data_connectors",
                                "{id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "12345",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/data_connectors/{id}",
                            "segments": [
                                {
                                    "lit": "data_connectors"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "data_connectors",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "data_connector_execution_result": {
            "fields": [
                {
                    "name": "conversation_id",
                    "short": "The conversation associated with this execution, if any.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "created_at",
                    "short": "The time the execution occurred.",
                    "type": "`$STRING`"
                },
                {
                    "name": "data_connector_id",
                    "short": "The unique identifier of the data connector that produced this result.",
                    "type": "`$STRING`"
                },
                {
                    "name": "error_message",
                    "short": "A human-readable error message.",
                    "type": "`$STRING`"
                },
                {
                    "name": "error_type",
                    "short": "The type of error that occurred, if any.",
                    "type": "`$STRING`"
                },
                {
                    "name": "execution_time_ms",
                    "short": "The execution time in milliseconds.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "http_method",
                    "short": "The HTTP method used for the request.",
                    "type": "`$STRING`"
                },
                {
                    "name": "http_status",
                    "short": "The HTTP status code returned by the external API.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "short": "The unique identifier for the execution result.",
                    "type": "`$STRING`"
                },
                {
                    "name": "raw_response_body",
                    "short": "The raw (unmapped) response body.",
                    "type": "`$STRING`"
                },
                {
                    "name": "request_body",
                    "short": "The request body sent to the external API.",
                    "type": "`$STRING`"
                },
                {
                    "name": "request_url",
                    "short": "The request URL.",
                    "type": "`$STRING`"
                },
                {
                    "name": "response_body",
                    "short": "The response body from the external API.",
                    "type": "`$STRING`"
                },
                {
                    "name": "source_id",
                    "short": "The identifier of the source that triggered this execution.",
                    "type": "`$STRING`"
                },
                {
                    "name": "source_type",
                    "short": "The type of source that triggered this execution.",
                    "type": "`$STRING`"
                },
                {
                    "name": "success",
                    "short": "Whether the execution was successful.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "type",
                    "short": "The type of object - `data_connector.execution`.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "data_connector_execution_result",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "12345",
                                        "kind": "param",
                                        "name": "data_connector_id",
                                        "orig": "data_connector_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "99001",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/data_connectors/{data_connector_id}/execution_results/{id}",
                            "segments": [
                                {
                                    "lit": "data_connectors"
                                },
                                {
                                    "var": "data_connector_id"
                                },
                                {
                                    "lit": "execution_results"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "data_connector_id",
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "data_connectors",
                                "{data_connector_id}",
                                "execution_results",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "data_connector"
                    ]
                ]
            }
        },
        "data_connector_execution_result_list": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "data_connector_execution_result_list",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "12345",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "data_connector_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "end_t",
                                        "orig": "end_t",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "error_type",
                                        "orig": "error_type",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "include_body",
                                        "orig": "include_body",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 10,
                                        "kind": "query",
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "start_t",
                                        "orig": "start_t",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "starting_after",
                                        "orig": "starting_after",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "success",
                                        "orig": "success",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/data_connectors/{data_connector_id}/execution_results",
                            "rename": {
                                "param": {
                                    "data_connector_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "data_connectors"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "execution_results"
                                }
                            ],
                            "select": {
                                "$action": "execution_results",
                                "exist": [
                                    "end_t",
                                    "error_type",
                                    "id",
                                    "include_body",
                                    "intercom_version",
                                    "per_page",
                                    "start_t",
                                    "starting_after",
                                    "success"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "data_connectors",
                                "{id}",
                                "execution_results"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "data_event": {
            "fields": [
                {
                    "format": "date-time",
                    "name": "created_at",
                    "short": "The time the event occurred as a UTC Unix timestamp",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "email",
                    "short": "An email address for your user.",
                    "type": "`$STRING`"
                },
                {
                    "name": "event_name",
                    "short": "The name of the event that occurred.",
                    "type": "`$STRING`"
                },
                {
                    "name": "event_summaries",
                    "short": "A list of event summaries for the user.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "id",
                    "short": "The unique identifier for the contact (lead or user) which is given by Intercom.",
                    "type": "`$STRING`"
                },
                {
                    "name": "metadata",
                    "short": "Optional metadata about the event.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "user_id",
                    "short": "Your identifier for the user.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "data_event",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/events",
                            "segments": [
                                {
                                    "lit": "events"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "events"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/events/summaries",
                            "segments": [
                                {
                                    "lit": "events"
                                },
                                {
                                    "lit": "summaries"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "events",
                                "summaries"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "data_event_summary": {
            "fields": [
                {
                    "name": "count",
                    "short": "The number of times the event was sent",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "description",
                    "short": "The description of the event",
                    "type": "`$STRING`"
                },
                {
                    "name": "first",
                    "short": "The first time the event was sent",
                    "type": "`$STRING`"
                },
                {
                    "name": "last",
                    "short": "The last time the event was sent",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "The name of the event",
                    "type": "`$STRING`"
                }
            ],
            "name": "data_event_summary",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "filter",
                                        "orig": "filter",
                                        "reqd": true,
                                        "type": "`$OBJECT`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "summary",
                                        "orig": "summary",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "type",
                                        "orig": "type",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/events",
                            "segments": [
                                {
                                    "lit": "events"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "filter",
                                    "intercom_version",
                                    "summary",
                                    "type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.events`"
                            },
                            "parts": [
                                "events"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "data_export": {
            "fields": [
                {
                    "name": "download_expires_at",
                    "short": "The time after which you will not be able to access the data.",
                    "type": "`$STRING`"
                },
                {
                    "name": "download_url",
                    "short": "The location where you can download your data.",
                    "type": "`$STRING`"
                },
                {
                    "name": "job_identifier",
                    "short": "The identifier for your job.",
                    "type": "`$STRING`"
                },
                {
                    "name": "status",
                    "short": "The current state of your job.",
                    "type": "`$STRING`"
                }
            ],
            "name": "data_export",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "job_identifier",
                                        "orig": "job_identifier",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/export/cancel/{job_identifier}",
                            "segments": [
                                {
                                    "lit": "export"
                                },
                                {
                                    "lit": "cancel"
                                },
                                {
                                    "var": "job_identifier"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version",
                                    "job_identifier"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "export",
                                "cancel",
                                "{job_identifier}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "cancel"
                    ]
                ]
            }
        },
        "deleted": {
            "fields": [
                {
                    "format": "date-time",
                    "name": "deleted_at",
                    "short": "The time when the conversation was deleted.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "short": "The ID of the deleted conversation.",
                    "type": "`$STRING`"
                },
                {
                    "name": "metrics_retained",
                    "short": "Whether reporting metrics are retained for this conversation ID",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "type",
                    "short": "String representing the object's type.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "deleted",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "desc",
                                        "kind": "query",
                                        "name": "order",
                                        "orig": "order",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 20,
                                        "kind": "query",
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/conversations/deleted",
                            "segments": [
                                {
                                    "lit": "conversations"
                                },
                                {
                                    "lit": "deleted"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version",
                                    "order",
                                    "page",
                                    "per_page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "conversations",
                                "deleted"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "deleted_article_object": {
            "fields": [],
            "name": "deleted_article_object",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 123,
                                        "kind": "param",
                                        "name": "article_id",
                                        "orig": "article_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/articles/{article_id}",
                            "segments": [
                                {
                                    "lit": "articles"
                                },
                                {
                                    "var": "article_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "article_id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "articles",
                                "{article_id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "article"
                    ]
                ]
            }
        },
        "deleted_company_object": {
            "fields": [],
            "name": "deleted_company_object",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632",
                                        "kind": "param",
                                        "name": "company_id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/companies/{company_id}",
                            "segments": [
                                {
                                    "lit": "companies"
                                },
                                {
                                    "var": "company_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "company_id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "companies",
                                "{company_id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "company"
                    ]
                ]
            }
        },
        "deleted_data_connector_object": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "deleted_data_connector_object",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "12345",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/data_connectors/{id}",
                            "segments": [
                                {
                                    "lit": "data_connectors"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "data_connectors",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "deleted_internal_article_object": {
            "fields": [
                {
                    "name": "ai_chatbot_availability",
                    "short": "Whether the internal article should be available for AI Chatbot (Fin).",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "ai_copilot_availability",
                    "short": "Whether the internal article should be available for AI Copilot.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "ai_sales_agent_availability",
                    "short": "Whether the internal article should be available for AI Sales Agent.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "audience_ids",
                    "short": "The list of audience IDs to target this internal article to for Fin AI Agent.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "author_id",
                    "op": {
                        "list": {
                            "type": "`$INTEGER`"
                        }
                    },
                    "req": true,
                    "short": "The id of the author of the article.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "body",
                    "short": "The content of the article in HTML.",
                    "type": "`$STRING`"
                },
                {
                    "name": "body_markdown",
                    "short": "The content of the article in markdown.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "created_at",
                    "short": "The time when the article was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "short": "The unique identifier for the article which is given by Intercom.",
                    "type": "`$STRING`"
                },
                {
                    "name": "locale",
                    "short": "The default locale of the article.",
                    "type": "`$STRING`"
                },
                {
                    "name": "owner_id",
                    "op": {
                        "list": {
                            "type": "`$INTEGER`"
                        }
                    },
                    "req": true,
                    "short": "The id of the owner of the article.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "title",
                    "op": {
                        "list": {
                            "type": "`$STRING`"
                        }
                    },
                    "req": true,
                    "short": "The title of the article.",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "The type of object - `internal_article`.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "updated_at",
                    "short": "The time when the article was last updated.",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "deleted_internal_article_object",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/internal_articles",
                            "segments": [
                                {
                                    "lit": "internal_articles"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "internal_articles"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/internal_articles",
                            "segments": [
                                {
                                    "lit": "internal_articles"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "internal_articles"
                            ]
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 123,
                                        "kind": "param",
                                        "name": "internal_article_id",
                                        "orig": "internal_article_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/internal_articles/{internal_article_id}",
                            "segments": [
                                {
                                    "lit": "internal_articles"
                                },
                                {
                                    "var": "internal_article_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version",
                                    "internal_article_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "internal_articles",
                                "{internal_article_id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "internal_article"
                    ]
                ]
            }
        },
        "deleted_object": {
            "fields": [],
            "name": "deleted_object",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 123,
                                        "kind": "param",
                                        "name": "news_item_id",
                                        "orig": "news_item_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/news/news_items/{news_item_id}",
                            "segments": [
                                {
                                    "lit": "news"
                                },
                                {
                                    "lit": "news_items"
                                },
                                {
                                    "var": "news_item_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version",
                                    "news_item_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "news",
                                "news_items",
                                "{news_item_id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "news_item"
                    ]
                ]
            }
        },
        "email": {
            "fields": [
                {
                    "name": "brand_id",
                    "short": "Associated brand identifier",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "created_at",
                    "short": "Unix timestamp of creation",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "domain",
                    "short": "Domain portion of the email address",
                    "type": "`$STRING`"
                },
                {
                    "name": "email",
                    "short": "Full sender email address",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "forwarded_email_last_received_at",
                    "short": "Unix timestamp of last forwarded email received (null if never)",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "forwarding_enabled",
                    "short": "Whether email forwarding is active",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "id",
                    "short": "Unique email setting identifier",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "The type of object",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "updated_at",
                    "short": "Unix timestamp of last modification",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "verified",
                    "short": "Whether the email address has been verified",
                    "type": "`$BOOLEAN`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "email",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/emails",
                            "segments": [
                                {
                                    "lit": "emails"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "emails"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/emails/{id}",
                            "segments": [
                                {
                                    "lit": "emails"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "emails",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "external_page": {
            "fields": [
                {
                    "name": "ai_agent_availability",
                    "op": {
                        "create": {
                            "type": "`$BOOLEAN`"
                        }
                    },
                    "req": true,
                    "short": "Whether the external page should be used to answer questions by AI Agent.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "ai_copilot_availability",
                    "op": {
                        "create": {
                            "type": "`$BOOLEAN`"
                        }
                    },
                    "req": true,
                    "short": "Whether the external page should be used to answer questions by AI Copilot.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "ai_sales_agent_availability",
                    "short": "Whether the external page should be used to answer questions by AI Sales Agent.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "format": "date-time",
                    "name": "created_at",
                    "req": true,
                    "short": "The time when the external page was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "external_id",
                    "op": {
                        "update": {
                            "type": "`$STRING`"
                        }
                    },
                    "req": true,
                    "short": "The identifier for the external page which was given by the source.",
                    "type": "`$STRING`"
                },
                {
                    "name": "fin_availability",
                    "short": "Deprecated.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "html",
                    "req": true,
                    "short": "The body of the external page in HTML.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "req": true,
                    "short": "The unique identifier for the external page which is given by Intercom.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "last_ingested_at",
                    "req": true,
                    "short": "The time when the external page was last ingested.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "locale",
                    "req": true,
                    "short": "Always en",
                    "type": "`$STRING`"
                },
                {
                    "name": "source_id",
                    "req": true,
                    "short": "The unique identifier for the source of the external page which was given by Intercom.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "title",
                    "req": true,
                    "short": "The title of the external page.",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "req": true,
                    "short": "Always external_page",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "updated_at",
                    "req": true,
                    "short": "The time when the external page was last updated.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "url",
                    "op": {
                        "update": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "The URL of the external page.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "external_page",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/ai/external_pages",
                            "segments": [
                                {
                                    "lit": "ai"
                                },
                                {
                                    "lit": "external_pages"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "ai",
                                "external_pages"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/ai/external_pages",
                            "segments": [
                                {
                                    "lit": "ai"
                                },
                                {
                                    "lit": "external_pages"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "ai",
                                "external_pages"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "page_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/ai/external_pages/{page_id}",
                            "rename": {
                                "param": {
                                    "page_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "ai"
                                },
                                {
                                    "lit": "external_pages"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "ai",
                                "external_pages",
                                "{id}"
                            ]
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "page_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/ai/external_pages/{page_id}",
                            "rename": {
                                "param": {
                                    "page_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "ai"
                                },
                                {
                                    "lit": "external_pages"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "ai",
                                "external_pages",
                                "{id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "page_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/ai/external_pages/{page_id}",
                            "rename": {
                                "param": {
                                    "page_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "ai"
                                },
                                {
                                    "lit": "external_pages"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "ai",
                                "external_pages",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "fin_agent": {
            "fields": [
                {
                    "name": "attachments",
                    "short": "An array of attachments to include with the message.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "conversation",
                    "short": "Conversation-related attribute errors.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "conversation_id",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "The external ID of the rated conversation.",
                    "type": "`$STRING`"
                },
                {
                    "name": "conversation_metadata",
                    "short": "Metadata about the conversation, including history and attributes.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "message",
                    "req": true,
                    "short": "A message exchanged within a Fin Agent conversation.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "rating",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "The rating now recorded on the conversation.",
                    "type": "`$STRING`"
                },
                {
                    "name": "remark",
                    "short": "Optional free-text comment the user left alongside the rating.",
                    "type": "`$STRING`"
                },
                {
                    "name": "status",
                    "short": "The result of the submission.",
                    "type": "`$STRING`"
                },
                {
                    "name": "user",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$OBJECT`"
                        }
                    },
                    "short": "User-related attribute errors.",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "fin_agent",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/fin/csat",
                            "segments": [
                                {
                                    "lit": "fin"
                                },
                                {
                                    "lit": "csat"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "fin",
                                "csat"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/fin/reply",
                            "segments": [
                                {
                                    "lit": "fin"
                                },
                                {
                                    "lit": "reply"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.errors`"
                            },
                            "parts": [
                                "fin",
                                "reply"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/fin/start",
                            "segments": [
                                {
                                    "lit": "fin"
                                },
                                {
                                    "lit": "start"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.errors`"
                            },
                            "parts": [
                                "fin",
                                "start"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "handling_event": {
            "fields": [
                {
                    "name": "reason",
                    "short": "Optional reason for the event (e.g., \"Paused\", \"Away\")",
                    "type": "`$STRING`"
                },
                {
                    "name": "teammate",
                    "req": true,
                    "short": "A reference to a teammate",
                    "type": "`$OBJECT`"
                },
                {
                    "format": "date-time",
                    "name": "timestamp",
                    "req": true,
                    "short": "ISO8601 timestamp when the event occurred",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "req": true,
                    "short": "The type of handling event",
                    "type": "`$STRING`"
                }
            ],
            "name": "handling_event",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "conversation_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/conversations/{id}/handling_events",
                            "rename": {
                                "param": {
                                    "id": "conversation_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "conversations"
                                },
                                {
                                    "var": "conversation_id"
                                },
                                {
                                    "lit": "handling_events"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "conversation_id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.handling_events`"
                            },
                            "parts": [
                                "conversations",
                                "{conversation_id}",
                                "handling_events"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "conversation"
                    ]
                ]
            }
        },
        "help_center": {
            "fields": [
                {
                    "name": "ar",
                    "short": "The content of the group in Arabic",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "bg",
                    "short": "The content of the group in Bulgarian",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "bs",
                    "short": "The content of the group in Bosnian",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "ca",
                    "short": "The content of the group in Catalan",
                    "type": "`$OBJECT`"
                },
                {
                    "format": "date-time",
                    "name": "created_at",
                    "short": "The time when the Help Center was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "cs",
                    "short": "The content of the group in Czech",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "custom_domain",
                    "short": "Custom domain configured for the help center",
                    "type": "`$STRING`"
                },
                {
                    "name": "da",
                    "short": "The content of the group in Danish",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "de",
                    "short": "The content of the group in German",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "default",
                    "short": "Whether this help center is the default for the workspace.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "description",
                    "short": "The description of the collection.",
                    "type": "`$STRING`"
                },
                {
                    "name": "display_name",
                    "short": "The display name of the Help Center only seen by teammates.",
                    "type": "`$STRING`"
                },
                {
                    "name": "el",
                    "short": "The content of the group in Greek",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "en",
                    "short": "The content of the group in English",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "es",
                    "short": "The content of the group in Spanish",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "et",
                    "short": "The content of the group in Estonian",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "fi",
                    "short": "The content of the group in Finnish",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "fr",
                    "short": "The content of the group in French",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "from_url",
                    "short": "The source URL that is redirected.",
                    "type": "`$STRING`"
                },
                {
                    "name": "he",
                    "short": "The content of the group in Hebrew",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "help_center_id",
                    "short": "The unique identifier for the help center the redirect belongs to.",
                    "type": "`$STRING`"
                },
                {
                    "name": "hr",
                    "short": "The content of the group in Croatian",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "hu",
                    "short": "The content of the group in Hungarian",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "id",
                    "short": "The content of the group in Indonesian",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "identifier",
                    "short": "The identifier of the Help Center.",
                    "type": "`$STRING`"
                },
                {
                    "name": "it",
                    "short": "The content of the group in Italian",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "ja",
                    "short": "The content of the group in Japanese",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "ko",
                    "short": "The content of the group in Korean",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "locale",
                    "short": "The locale of the redirect's target.",
                    "type": "`$STRING`"
                },
                {
                    "name": "locales",
                    "short": "The locales in which the help center is available.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "lt",
                    "short": "The content of the group in Lithuanian",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "lv",
                    "short": "The content of the group in Latvian",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "mn",
                    "short": "The content of the group in Mongolian",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "name",
                    "short": "The name of the collection.",
                    "type": "`$STRING`"
                },
                {
                    "name": "nb",
                    "short": "The content of the group in Norwegian",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "nl",
                    "short": "The content of the group in Dutch",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "parent_id",
                    "short": "The id of the parent collection.",
                    "type": "`$STRING`"
                },
                {
                    "name": "pl",
                    "short": "The content of the group in Polish",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "pt",
                    "short": "The content of the group in Portuguese (Portugal)",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "ptBR",
                    "short": "The content of the group in Portuguese (Brazil)",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "ro",
                    "short": "The content of the group in Romanian",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "ru",
                    "short": "The content of the group in Russian",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "sl",
                    "short": "The content of the group in Slovenian",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "sr",
                    "short": "The content of the group in Serbian",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "sv",
                    "short": "The content of the group in Swedish",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "target_id",
                    "short": "The unique identifier of the target article or collection.",
                    "type": "`$STRING`"
                },
                {
                    "name": "target_type",
                    "short": "The type of the redirect target.",
                    "type": "`$STRING`"
                },
                {
                    "name": "tr",
                    "short": "The content of the group in Turkish",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "translated_content",
                    "short": "The Translated Content of an Group.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "type",
                    "short": "The type of object - group_translated_content.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "updated_at",
                    "short": "The time when the Help Center was last updated.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "url",
                    "short": "The URL for the help center, if you have a custom domain then this will show the URL using the custom domain.",
                    "type": "`$STRING`"
                },
                {
                    "name": "vi",
                    "short": "The content of the group in Vietnamese",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "website_turned_on",
                    "short": "Whether the Help Center is turned on or not.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "workspace_id",
                    "short": "The id of the workspace which the Help Center belongs to.",
                    "type": "`$STRING`"
                },
                {
                    "name": "zhCN",
                    "short": "The content of the group in Chinese (China)",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "zhTW",
                    "short": "The content of the group in Chinese (Taiwan)",
                    "type": "`$OBJECT`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "help_center",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "help_center_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/help_center/help_centers/{help_center_id}/redirects",
                            "rename": {
                                "param": {
                                    "help_center_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "help_center"
                                },
                                {
                                    "lit": "help_centers"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "redirects"
                                }
                            ],
                            "select": {
                                "$action": "redirect",
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "help_center",
                                "help_centers",
                                "{id}",
                                "redirects"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/help_center/collections",
                            "segments": [
                                {
                                    "lit": "help_center"
                                },
                                {
                                    "lit": "collections"
                                }
                            ],
                            "select": {
                                "$action": "collection",
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.translated_content`"
                            },
                            "parts": [
                                "help_center",
                                "collections"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "help_center_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 50,
                                        "kind": "query",
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/help_center/help_centers/{help_center_id}/redirects",
                            "rename": {
                                "param": {
                                    "help_center_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "help_center"
                                },
                                {
                                    "lit": "help_centers"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "redirects"
                                }
                            ],
                            "select": {
                                "$action": "redirect",
                                "exist": [
                                    "id",
                                    "intercom_version",
                                    "page",
                                    "per_page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "help_center",
                                "help_centers",
                                "{id}",
                                "redirects"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/help_center/collections",
                            "segments": [
                                {
                                    "lit": "help_center"
                                },
                                {
                                    "lit": "collections"
                                }
                            ],
                            "select": {
                                "$action": "collection",
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "help_center",
                                "collections"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/help_center/help_centers",
                            "segments": [
                                {
                                    "lit": "help_center"
                                },
                                {
                                    "lit": "help_centers"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "help_center",
                                "help_centers"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 123,
                                        "kind": "param",
                                        "name": "collection_id",
                                        "orig": "collection_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/help_center/collections/{collection_id}",
                            "segments": [
                                {
                                    "lit": "help_center"
                                },
                                {
                                    "lit": "collections"
                                },
                                {
                                    "var": "collection_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "collection_id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.translated_content`"
                            },
                            "parts": [
                                "help_center",
                                "collections",
                                "{collection_id}"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 123,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "help_center_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/help_center/help_centers/{help_center_id}",
                            "rename": {
                                "param": {
                                    "help_center_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "help_center"
                                },
                                {
                                    "lit": "help_centers"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "help_center",
                                "help_centers",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "help_center_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "26",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/help_center/help_centers/{help_center_id}/redirects/{id}",
                            "rename": {
                                "param": {
                                    "help_center_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "help_center"
                                },
                                {
                                    "lit": "help_centers"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "redirects"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "help_center",
                                "help_centers",
                                "{id}",
                                "redirects",
                                "{id}"
                            ]
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 123,
                                        "kind": "param",
                                        "name": "collection_id",
                                        "orig": "collection_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/help_center/collections/{collection_id}",
                            "segments": [
                                {
                                    "lit": "help_center"
                                },
                                {
                                    "lit": "collections"
                                },
                                {
                                    "var": "collection_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "collection_id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "help_center",
                                "collections",
                                "{collection_id}"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "help_center_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "26",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/help_center/help_centers/{help_center_id}/redirects/{id}",
                            "rename": {
                                "param": {
                                    "help_center_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "help_center"
                                },
                                {
                                    "lit": "help_centers"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "redirects"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "help_center",
                                "help_centers",
                                "{id}",
                                "redirects",
                                "{id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 123,
                                        "kind": "param",
                                        "name": "collection_id",
                                        "orig": "collection_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/help_center/collections/{collection_id}",
                            "segments": [
                                {
                                    "lit": "help_center"
                                },
                                {
                                    "lit": "collections"
                                },
                                {
                                    "var": "collection_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "collection_id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.translated_content`"
                            },
                            "parts": [
                                "help_center",
                                "collections",
                                "{collection_id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "collection"
                    ]
                ]
            }
        },
        "internal_article": {
            "fields": [
                {
                    "name": "ai_chatbot_availability",
                    "short": "Whether the internal article is available for AI Chatbot (Fin).",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "ai_copilot_availability",
                    "short": "Whether the internal article is available for AI Copilot.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "ai_sales_agent_availability",
                    "short": "Whether the internal article is available for AI Sales Agent.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "audience_ids",
                    "short": "The list of audience IDs this internal article is targeted to for Fin AI Agent.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "author_id",
                    "short": "The id of the author of the article.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "body",
                    "short": "The body of the article in HTML.",
                    "type": "`$STRING`"
                },
                {
                    "name": "body_markdown",
                    "short": "The body of the article in markdown.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "created_at",
                    "short": "The time when the article was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "short": "The unique identifier for the article which is given by Intercom.",
                    "type": "`$STRING`"
                },
                {
                    "name": "locale",
                    "short": "The default locale of the article.",
                    "type": "`$STRING`"
                },
                {
                    "name": "owner_id",
                    "short": "The id of the owner of the article.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "title",
                    "short": "The title of the article.",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "The type of object - `internal_article`.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "updated_at",
                    "short": "The time when the article was last updated.",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "internal_article",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 123,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "internal_article_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/internal_articles/{internal_article_id}",
                            "rename": {
                                "param": {
                                    "internal_article_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "internal_articles"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "internal_articles",
                                "{id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 123,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "internal_article_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/internal_articles/{internal_article_id}",
                            "rename": {
                                "param": {
                                    "internal_article_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "internal_articles"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "internal_articles",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "internal_article_search": {
            "fields": [
                {
                    "name": "data",
                    "short": "An object containing the results of the search.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "pages",
                    "short": "Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "total_count",
                    "short": "The total number of Internal Articles matching the search query",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "type",
                    "short": "The type of the object - `list`.",
                    "type": "`$STRING`"
                }
            ],
            "name": "internal_article_search",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": 123,
                                        "kind": "query",
                                        "name": "folder_id",
                                        "orig": "folder_id",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/internal_articles/search",
                            "segments": [
                                {
                                    "lit": "internal_articles"
                                },
                                {
                                    "lit": "search"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "folder_id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "internal_articles",
                                "search"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "ip_allowlist": {
            "fields": [
                {
                    "name": "enabled",
                    "short": "Whether the IP allowlist is enabled for the workspace.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "ip_allowlist",
                    "short": "List of allowed IP addresses and/or IP ranges in CIDR notation.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "type",
                    "short": "String representing the object's type.",
                    "type": "`$STRING`"
                }
            ],
            "name": "ip_allowlist",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/ip_allowlist",
                            "segments": [
                                {
                                    "lit": "ip_allowlist"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.ip_allowlist`"
                            },
                            "parts": [
                                "ip_allowlist"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/ip_allowlist",
                            "segments": [
                                {
                                    "lit": "ip_allowlist"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": {
                                    "ip_allowlist": "`reqdata`"
                                },
                                "res": "`body.ip_allowlist`"
                            },
                            "parts": [
                                "ip_allowlist"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "job": {
            "fields": [
                {
                    "name": "id",
                    "req": true,
                    "short": "The id of the job that's currently being processed or has completed.",
                    "type": "`$STRING`"
                },
                {
                    "name": "resource_id",
                    "short": "The id of the resource created during job execution (e.g.",
                    "type": "`$STRING`"
                },
                {
                    "name": "resource_type",
                    "short": "The type of resource created during job execution.",
                    "type": "`$STRING`"
                },
                {
                    "name": "resource_url",
                    "short": "The url of the resource created during job exeuction.",
                    "type": "`$STRING`"
                },
                {
                    "name": "skip_notifications",
                    "short": "Option to disable notifications when a Ticket is created.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "status",
                    "short": "The status of the job execution.",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "The type of the object",
                    "type": "`$STRING`"
                },
                {
                    "name": "url",
                    "short": "API endpoint URL to check the job status.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "job",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/tickets/enqueue",
                            "segments": [
                                {
                                    "lit": "tickets"
                                },
                                {
                                    "lit": "enqueue"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "tickets",
                                "enqueue"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "job_id",
                                        "orig": "job_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/jobs/status/{job_id}",
                            "segments": [
                                {
                                    "lit": "jobs"
                                },
                                {
                                    "lit": "status"
                                },
                                {
                                    "var": "job_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version",
                                    "job_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "jobs",
                                "status",
                                "{job_id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "status"
                    ]
                ]
            }
        },
        "macro": {
            "fields": [
                {
                    "name": "available_on",
                    "short": "Where the macro is available for use.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "body",
                    "short": "The body of the macro in HTML format with placeholders transformed to XML-like format.",
                    "type": "`$STRING`"
                },
                {
                    "name": "body_text",
                    "short": "The plain text version of the macro body with original Intercom placeholder format.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "created_at",
                    "short": "The time the macro was created in ISO 8601 format.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "The unique identifier for the macro.",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "The name of the macro.",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "String representing the object's type.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "updated_at",
                    "short": "The time the macro was last updated in ISO 8601 format.",
                    "type": "`$STRING`"
                },
                {
                    "name": "visible_to",
                    "short": "Who can view this macro.",
                    "type": "`$STRING`"
                },
                {
                    "name": "visible_to_team_ids",
                    "short": "The team IDs that can view this macro when visible_to is set to specific_teams.",
                    "type": "`$ARRAY`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "macro",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": 50,
                                        "kind": "query",
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": "WzE3MTk0OTM3NTcuMCwgIjEyMyJd",
                                        "kind": "query",
                                        "name": "starting_after",
                                        "orig": "starting_after",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1719474966,
                                        "kind": "query",
                                        "name": "updated_since",
                                        "orig": "updated_since",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/macros",
                            "segments": [
                                {
                                    "lit": "macros"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version",
                                    "per_page",
                                    "starting_after",
                                    "updated_since"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "macros"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/macros/{id}",
                            "segments": [
                                {
                                    "lit": "macros"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "macros",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "merge_history": {
            "fields": [
                {
                    "format": "date-time",
                    "name": "merged_at",
                    "short": "(Unix timestamp in seconds) The time when the merge occurred.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "source_contact_id",
                    "short": "The Intercom ID of the contact that was merged into this contact.",
                    "type": "`$STRING`"
                },
                {
                    "name": "source_contact_role",
                    "short": "The role of the contact that was merged in.",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "The type of object.",
                    "type": "`$STRING`"
                }
            ],
            "name": "merge_history",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "63a07ddf05a32042dffac965",
                                        "kind": "param",
                                        "name": "contact_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "cursor",
                                        "orig": "cursor",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "order",
                                        "orig": "order",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 50,
                                        "kind": "query",
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/contacts/{id}/merge_history",
                            "rename": {
                                "param": {
                                    "id": "contact_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "contacts"
                                },
                                {
                                    "var": "contact_id"
                                },
                                {
                                    "lit": "merge_history"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "contact_id",
                                    "cursor",
                                    "intercom_version",
                                    "order",
                                    "per_page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "contacts",
                                "{contact_id}",
                                "merge_history"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "contact"
                    ]
                ]
            }
        },
        "message": {
            "fields": [
                {
                    "name": "bcc",
                    "type": "`$ANY`",
                    "union": {
                        "branches": 2,
                        "count": 1,
                        "depth": 0
                    }
                },
                {
                    "name": "body",
                    "op": {
                        "create": {
                            "type": "`$STRING`"
                        }
                    },
                    "req": true,
                    "short": "The message body, which may contain HTML.",
                    "type": "`$STRING`"
                },
                {
                    "name": "cc",
                    "type": "`$ANY`",
                    "union": {
                        "branches": 2,
                        "count": 1,
                        "depth": 0
                    }
                },
                {
                    "name": "conversation_id",
                    "short": "The associated conversation_id",
                    "type": "`$STRING`"
                },
                {
                    "name": "create_conversation_without_contact_reply",
                    "short": "Whether a conversation should be opened in the inbox for the message without the contact replying.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "format": "date-time",
                    "name": "created_at",
                    "op": {
                        "create": {
                            "type": "`$INTEGER`"
                        }
                    },
                    "req": true,
                    "short": "The time the conversation was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "from",
                    "req": true,
                    "short": "The sender of the message.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "id",
                    "req": true,
                    "short": "The id representing the message.",
                    "type": "`$STRING`"
                },
                {
                    "name": "message_type",
                    "op": {
                        "create": {
                            "type": "`$STRING`"
                        }
                    },
                    "req": true,
                    "short": "The type of message that was sent.",
                    "type": "`$STRING`"
                },
                {
                    "name": "subject",
                    "short": "The subject of the message.",
                    "type": "`$STRING`"
                },
                {
                    "name": "template",
                    "short": "The style of the outgoing message.",
                    "type": "`$STRING`"
                },
                {
                    "name": "to",
                    "type": "`$ANY`",
                    "union": {
                        "branches": 2,
                        "count": 1,
                        "depth": 0
                    }
                },
                {
                    "name": "type",
                    "req": true,
                    "short": "The type of the message",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "message",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/messages",
                            "segments": [
                                {
                                    "lit": "messages"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "messages"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "news_item": {
            "fields": [
                {
                    "name": "body",
                    "short": "The news item body, which may contain HTML.",
                    "type": "`$STRING`"
                },
                {
                    "format": "uri",
                    "name": "cover_image_url",
                    "short": "URL of the image used as cover.",
                    "type": "`$STRING`"
                },
                {
                    "format": "timestamp",
                    "name": "created_at",
                    "short": "Timestamp for when the news item was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "deliver_silently",
                    "short": "When set to true, the news item will appear in the messenger newsfeed without showing a notification badge.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "id",
                    "short": "The unique identifier for the news item which is given by Intercom.",
                    "type": "`$STRING`"
                },
                {
                    "name": "labels",
                    "short": "Label names displayed to users to categorize the news item.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "newsfeed_assignments",
                    "short": "A list of newsfeed_assignments to assign to the specified newsfeed.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "reactions",
                    "short": "Ordered list of emoji reactions to the news item.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "sender_id",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$INTEGER`"
                        },
                        "update": {
                            "req": true,
                            "type": "`$INTEGER`"
                        }
                    },
                    "short": "The id of the sender of the news item.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "state",
                    "short": "News items will not be visible to your users in the assigned newsfeeds until they are set live.",
                    "type": "`$STRING`"
                },
                {
                    "name": "title",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        },
                        "update": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "The title of the news item.",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "The type of object.",
                    "type": "`$STRING`"
                },
                {
                    "format": "timestamp",
                    "name": "updated_at",
                    "short": "Timestamp for when the news item was last updated.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "workspace_id",
                    "short": "The id of the workspace which the news item belongs to.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "news_item",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/news/news_items",
                            "segments": [
                                {
                                    "lit": "news"
                                },
                                {
                                    "lit": "news_items"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "news",
                                "news_items"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 123,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "news_item_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/news/news_items/{news_item_id}",
                            "rename": {
                                "param": {
                                    "news_item_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "news"
                                },
                                {
                                    "lit": "news_items"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "news",
                                "news_items",
                                "{id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 123,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "news_item_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/news/news_items/{news_item_id}",
                            "rename": {
                                "param": {
                                    "news_item_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "news"
                                },
                                {
                                    "lit": "news_items"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "news",
                                "news_items",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "newsfeed": {
            "fields": [
                {
                    "format": "timestamp",
                    "name": "created_at",
                    "short": "Timestamp for when the newsfeed was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "short": "The unique identifier for the newsfeed which is given by Intercom.",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "The name of the newsfeed.",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "The type of object.",
                    "type": "`$STRING`"
                },
                {
                    "format": "timestamp",
                    "name": "updated_at",
                    "short": "Timestamp for when the newsfeed was last updated.",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "newsfeed",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "newsfeed_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/news/newsfeeds/{newsfeed_id}",
                            "rename": {
                                "param": {
                                    "newsfeed_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "news"
                                },
                                {
                                    "lit": "newsfeeds"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "news",
                                "newsfeeds",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "note": {
            "fields": [
                {
                    "name": "admin_id",
                    "short": "The unique identifier of the admin creating the note.",
                    "type": "`$STRING`"
                },
                {
                    "name": "author",
                    "short": "Optional.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "body",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "The body text of the note.",
                    "type": "`$STRING`"
                },
                {
                    "name": "company",
                    "short": "Represents the company that the note was created about.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "contact",
                    "short": "Represents the contact that the note was created about.",
                    "type": "`$OBJECT`"
                },
                {
                    "format": "timestamp",
                    "name": "created_at",
                    "short": "The time the note was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "short": "The id of the note.",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "String representing the object's type.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "note",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632",
                                        "kind": "param",
                                        "name": "company_id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/companies/{company_id}/notes",
                            "segments": [
                                {
                                    "lit": "companies"
                                },
                                {
                                    "var": "company_id"
                                },
                                {
                                    "lit": "notes"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "company_id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "companies",
                                "{company_id}",
                                "notes"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "contact_id",
                                        "orig": "contact_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/contacts/{contact_id}/notes",
                            "segments": [
                                {
                                    "lit": "contacts"
                                },
                                {
                                    "var": "contact_id"
                                },
                                {
                                    "lit": "notes"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "contact_id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "contacts",
                                "{contact_id}",
                                "notes"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632",
                                        "kind": "param",
                                        "name": "company_id",
                                        "orig": "company_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/companies/{company_id}/notes",
                            "segments": [
                                {
                                    "lit": "companies"
                                },
                                {
                                    "var": "company_id"
                                },
                                {
                                    "lit": "notes"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "company_id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "companies",
                                "{company_id}",
                                "notes"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "contact_id",
                                        "orig": "contact_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/contacts/{contact_id}/notes",
                            "segments": [
                                {
                                    "lit": "contacts"
                                },
                                {
                                    "var": "contact_id"
                                },
                                {
                                    "lit": "notes"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "contact_id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "contacts",
                                "{contact_id}",
                                "notes"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 1,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "note_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/notes/{note_id}",
                            "rename": {
                                "param": {
                                    "note_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "notes"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "notes",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "company"
                    ],
                    [
                        "contact"
                    ]
                ]
            }
        },
        "office_hour": {
            "fields": [
                {
                    "name": "created_at",
                    "short": "The time the schedule was created as a Unix timestamp.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "short": "The unique identifier for the office hours schedule.",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "op": {
                        "list": {
                            "type": "`$STRING`"
                        }
                    },
                    "req": true,
                    "short": "The name of the office hours schedule.",
                    "type": "`$STRING`"
                },
                {
                    "name": "time_intervals",
                    "op": {
                        "list": {
                            "type": "`$ARRAY`"
                        }
                    },
                    "req": true,
                    "short": "The open intervals for the schedule.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "time_zone_name",
                    "op": {
                        "list": {
                            "type": "`$STRING`"
                        }
                    },
                    "req": true,
                    "short": "The IANA time zone the schedule's hours are evaluated in.",
                    "type": "`$STRING`"
                },
                {
                    "name": "twenty_four_seven",
                    "short": "Whether the schedule is open 24/7.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "type",
                    "short": "The type of the object - always `office_hours_schedule`.",
                    "type": "`$STRING`"
                },
                {
                    "name": "updated_at",
                    "short": "The time the schedule was last updated as a Unix timestamp.",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "office_hour",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/office_hours_schedules",
                            "segments": [
                                {
                                    "lit": "office_hours_schedules"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "office_hours_schedules"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/office_hours_schedules",
                            "segments": [
                                {
                                    "lit": "office_hours_schedules"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "office_hours_schedules"
                            ]
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "456",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "office_hours_schedule_id",
                                        "orig": "office_hours_schedule_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions/{id}",
                            "segments": [
                                {
                                    "lit": "office_hours_schedules"
                                },
                                {
                                    "var": "office_hours_schedule_id"
                                },
                                {
                                    "lit": "office_hours_exceptions"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version",
                                    "office_hours_schedule_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "office_hours_schedules",
                                "{office_hours_schedule_id}",
                                "office_hours_exceptions",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/office_hours_schedules/{id}",
                            "segments": [
                                {
                                    "lit": "office_hours_schedules"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "office_hours_schedules",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "office_hours_schedule"
                    ]
                ]
            }
        },
        "office_hours_exception": {
            "fields": [
                {
                    "name": "created_at",
                    "short": "The time the exception was created as a Unix timestamp.",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "date",
                    "name": "exception_date",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "The date the exception applies to, in `YYYY-MM-DD` format.",
                    "type": "`$STRING`"
                },
                {
                    "name": "exception_type",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "`closed` means the workspace is closed all day; `custom_hours` replaces the regular hours with `time_intervals`.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "The unique identifier for the office hours exception.",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "An optional name for the exception.",
                    "type": "`$STRING`"
                },
                {
                    "name": "office_hours_schedule_id",
                    "short": "The unique identifier for the schedule this exception belongs to.",
                    "type": "`$STRING`"
                },
                {
                    "name": "recurring_annually",
                    "short": "Whether the exception repeats every year on the same date.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "time_intervals",
                    "short": "The open intervals for the exception date.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "type",
                    "short": "The type of the object - always `office_hours_exception`.",
                    "type": "`$STRING`"
                },
                {
                    "name": "updated_at",
                    "short": "The time the exception was last updated as a Unix timestamp.",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "office_hours_exception",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "office_hours_schedule_id",
                                        "orig": "office_hours_schedule_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions",
                            "segments": [
                                {
                                    "lit": "office_hours_schedules"
                                },
                                {
                                    "var": "office_hours_schedule_id"
                                },
                                {
                                    "lit": "office_hours_exceptions"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version",
                                    "office_hours_schedule_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "office_hours_schedules",
                                "{office_hours_schedule_id}",
                                "office_hours_exceptions"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "office_hours_schedule_id",
                                        "orig": "office_hours_schedule_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions",
                            "segments": [
                                {
                                    "lit": "office_hours_schedules"
                                },
                                {
                                    "var": "office_hours_schedule_id"
                                },
                                {
                                    "lit": "office_hours_exceptions"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version",
                                    "office_hours_schedule_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "office_hours_schedules",
                                "{office_hours_schedule_id}",
                                "office_hours_exceptions"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "456",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "office_hours_schedule_id",
                                        "orig": "office_hours_schedule_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions/{id}",
                            "segments": [
                                {
                                    "lit": "office_hours_schedules"
                                },
                                {
                                    "var": "office_hours_schedule_id"
                                },
                                {
                                    "lit": "office_hours_exceptions"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version",
                                    "office_hours_schedule_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "office_hours_schedules",
                                "{office_hours_schedule_id}",
                                "office_hours_exceptions",
                                "{id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "456",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "office_hours_schedule_id",
                                        "orig": "office_hours_schedule_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions/{id}",
                            "segments": [
                                {
                                    "lit": "office_hours_schedules"
                                },
                                {
                                    "var": "office_hours_schedule_id"
                                },
                                {
                                    "lit": "office_hours_exceptions"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version",
                                    "office_hours_schedule_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "office_hours_schedules",
                                "{office_hours_schedule_id}",
                                "office_hours_exceptions",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "office_hours_schedule"
                    ]
                ]
            }
        },
        "office_hours_schedule": {
            "fields": [
                {
                    "name": "created_at",
                    "short": "The time the schedule was created as a Unix timestamp.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "short": "The unique identifier for the office hours schedule.",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "The name of the office hours schedule.",
                    "type": "`$STRING`"
                },
                {
                    "name": "time_intervals",
                    "short": "The open intervals that make up the weekly schedule.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "time_zone_name",
                    "short": "The IANA time zone the schedule's hours are evaluated in.",
                    "type": "`$STRING`"
                },
                {
                    "name": "twenty_four_seven",
                    "short": "Whether the schedule is open 24/7.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "type",
                    "short": "The type of the object - always `office_hours_schedule`.",
                    "type": "`$STRING`"
                },
                {
                    "name": "updated_at",
                    "short": "The time the schedule was last updated as a Unix timestamp.",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "office_hours_schedule",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/office_hours_schedules/{id}",
                            "segments": [
                                {
                                    "lit": "office_hours_schedules"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "office_hours_schedules",
                                "{id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/office_hours_schedules/{id}",
                            "segments": [
                                {
                                    "lit": "office_hours_schedules"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "office_hours_schedules",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "paginated": {
            "fields": [
                {
                    "name": "data",
                    "short": "An array of Objects",
                    "type": "`$ARRAY`",
                    "union": {
                        "branches": 2,
                        "count": 1,
                        "depth": 1
                    }
                },
                {
                    "name": "pages",
                    "short": "Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "total_count",
                    "short": "A count of the total number of objects.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "type",
                    "short": "The type of object",
                    "type": "`$STRING`"
                }
            ],
            "name": "paginated",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "newsfeed_id",
                                        "orig": "newsfeed_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/news/newsfeeds/{newsfeed_id}/items",
                            "segments": [
                                {
                                    "lit": "news"
                                },
                                {
                                    "lit": "newsfeeds"
                                },
                                {
                                    "var": "newsfeed_id"
                                },
                                {
                                    "lit": "items"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version",
                                    "newsfeed_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "news",
                                "newsfeeds",
                                "{newsfeed_id}",
                                "items"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/news/news_items",
                            "segments": [
                                {
                                    "lit": "news"
                                },
                                {
                                    "lit": "news_items"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "news",
                                "news_items"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/news/newsfeeds",
                            "segments": [
                                {
                                    "lit": "news"
                                },
                                {
                                    "lit": "newsfeeds"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "news",
                                "newsfeeds"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "newsfeed"
                    ]
                ]
            }
        },
        "phone_switch": {
            "fields": [
                {
                    "name": "custom_attributes",
                    "short": "An object containing the different custom attributes associated to the conversation as key-value pairs.",
                    "type": "`$OBJECT`",
                    "union": {
                        "branches": 4,
                        "count": 2,
                        "depth": 3
                    }
                },
                {
                    "name": "phone",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "Phone number in E.164 format, that has received the SMS to continue the conversation in the Messenger.",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "type": "`$STRING`"
                }
            ],
            "name": "phone_switch",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/phone_call_redirects",
                            "segments": [
                                {
                                    "lit": "phone_call_redirects"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "phone_call_redirects"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "reporting_data": {
            "fields": [
                {
                    "name": "download_expires_at",
                    "type": "`$STRING`"
                },
                {
                    "name": "download_url",
                    "type": "`$STRING`"
                },
                {
                    "name": "job_identifier",
                    "type": "`$STRING`"
                },
                {
                    "name": "status",
                    "type": "`$STRING`"
                }
            ],
            "name": "reporting_data",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "application/octet-stream",
                                        "kind": "header",
                                        "name": "accept",
                                        "orig": "accept",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "app_id",
                                        "orig": "app_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "job_identifier",
                                        "orig": "job_identifier",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/download/reporting_data/{job_identifier}",
                            "rename": {
                                "param": {
                                    "job_identifier": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "download"
                                },
                                {
                                    "lit": "reporting_data"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "accept",
                                    "app_id",
                                    "intercom_version",
                                    "job_identifier"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "download",
                                "reporting_data",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "app_id",
                                        "orig": "app_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "client_id",
                                        "orig": "client_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "job_identifier",
                                        "orig": "job_identifier",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/export/reporting_data/{job_identifier}",
                            "rename": {
                                "param": {
                                    "job_identifier": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "export"
                                },
                                {
                                    "lit": "reporting_data"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "app_id",
                                    "client_id",
                                    "intercom_version",
                                    "job_identifier"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "export",
                                "reporting_data",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "reporting_data_export": {
            "fields": [
                {
                    "name": "attribute_ids",
                    "req": true,
                    "type": "`$ARRAY`"
                },
                {
                    "name": "attributes",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "dataset_id",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "default_time_attribute_id",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "type": "`$STRING`"
                },
                {
                    "name": "download_expires_at",
                    "type": "`$STRING`"
                },
                {
                    "name": "download_url",
                    "type": "`$STRING`"
                },
                {
                    "format": "int64",
                    "name": "end_time",
                    "req": true,
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "job_identifier",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "type": "`$STRING`"
                },
                {
                    "format": "int64",
                    "name": "start_time",
                    "req": true,
                    "type": "`$INTEGER`"
                },
                {
                    "name": "status",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "reporting_data_export",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/export/reporting_data/enqueue",
                            "segments": [
                                {
                                    "lit": "export"
                                },
                                {
                                    "lit": "reporting_data"
                                },
                                {
                                    "lit": "enqueue"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "export",
                                "reporting_data",
                                "enqueue"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/export/reporting_data/get_datasets",
                            "segments": [
                                {
                                    "lit": "export"
                                },
                                {
                                    "lit": "reporting_data"
                                },
                                {
                                    "lit": "get_datasets"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "export",
                                "reporting_data",
                                "get_datasets"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "segment": {
            "fields": [
                {
                    "name": "count",
                    "short": "The number of items in the user segment.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "created_at",
                    "short": "The time the segment was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "short": "The unique identifier representing the segment.",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "The name of the segment.",
                    "type": "`$STRING`"
                },
                {
                    "name": "person_type",
                    "short": "Type of the contact: contact (lead) or user.",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "The type of object.",
                    "type": "`$STRING`"
                },
                {
                    "name": "updated_at",
                    "short": "The time the segment was updated.",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "segment",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": true,
                                        "kind": "query",
                                        "name": "include_count",
                                        "orig": "include_count",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/segments",
                            "segments": [
                                {
                                    "lit": "segments"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "include_count",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "segments"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "segment_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/segments/{segment_id}",
                            "rename": {
                                "param": {
                                    "segment_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "segments"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "segments",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "side_conversation": {
            "fields": [
                {
                    "name": "conversation_parts",
                    "short": "The conversation parts (messages) in this side conversation.",
                    "type": "`$ARRAY`",
                    "union": {
                        "branches": 6,
                        "count": 1,
                        "depth": 3
                    }
                },
                {
                    "name": "side_conversation_id",
                    "short": "The unique identifier for the side conversation.",
                    "type": "`$STRING`"
                },
                {
                    "name": "total_count",
                    "short": "The total number of conversation parts in this side conversation.",
                    "type": "`$INTEGER`"
                }
            ],
            "name": "side_conversation",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "conversation_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 25,
                                        "kind": "query",
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/conversations/{id}/side_conversations",
                            "rename": {
                                "param": {
                                    "id": "conversation_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "conversations"
                                },
                                {
                                    "var": "conversation_id"
                                },
                                {
                                    "lit": "side_conversations"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "conversation_id",
                                    "intercom_version",
                                    "page",
                                    "per_page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "conversations",
                                "{conversation_id}",
                                "side_conversations"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "conversation"
                    ]
                ]
            }
        },
        "subscription": {
            "fields": [
                {
                    "name": "consent_type",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "Describes the type of consent.",
                    "type": "`$STRING`"
                },
                {
                    "name": "content_types",
                    "short": "The message types that this subscription supports - can contain `email` or `sms_message`.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "default_translation",
                    "short": "A translation object contains the localised details of a subscription type.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "id",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "The unique identifier representing the subscription type.",
                    "type": "`$STRING`"
                },
                {
                    "name": "state",
                    "short": "The state of the subscription type.",
                    "type": "`$STRING`"
                },
                {
                    "name": "translations",
                    "short": "An array of translations objects with the localised version of the subscription type in each available locale within your translation settings.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "type",
                    "short": "The type of the object - subscription",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "subscription",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "63a07ddf05a32042dffac965",
                                        "kind": "param",
                                        "name": "contact_id",
                                        "orig": "contact_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/contacts/{contact_id}/subscriptions",
                            "segments": [
                                {
                                    "lit": "contacts"
                                },
                                {
                                    "var": "contact_id"
                                },
                                {
                                    "lit": "subscriptions"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "contact_id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "contacts",
                                "{contact_id}",
                                "subscriptions"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "63a07ddf05a32042dffac965",
                                        "kind": "param",
                                        "name": "contact_id",
                                        "orig": "contact_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/contacts/{contact_id}/subscriptions",
                            "segments": [
                                {
                                    "lit": "contacts"
                                },
                                {
                                    "var": "contact_id"
                                },
                                {
                                    "lit": "subscriptions"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "contact_id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "contacts",
                                "{contact_id}",
                                "subscriptions"
                            ]
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "63a07ddf05a32042dffac965",
                                        "kind": "param",
                                        "name": "contact_id",
                                        "orig": "contact_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "37846",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "subscription_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/contacts/{contact_id}/subscriptions/{subscription_id}",
                            "rename": {
                                "param": {
                                    "subscription_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "contacts"
                                },
                                {
                                    "var": "contact_id"
                                },
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "contact_id",
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "contacts",
                                "{contact_id}",
                                "subscriptions",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "contact"
                    ]
                ]
            }
        },
        "subscription_type": {
            "fields": [
                {
                    "name": "consent_type",
                    "short": "Describes the type of consent.",
                    "type": "`$STRING`"
                },
                {
                    "name": "content_types",
                    "short": "The message types that this subscription supports - can contain `email` or `sms_message`.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "default_translation",
                    "short": "A translation object contains the localised details of a subscription type.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "id",
                    "short": "The unique identifier representing the subscription type.",
                    "type": "`$STRING`"
                },
                {
                    "name": "state",
                    "short": "The state of the subscription type.",
                    "type": "`$STRING`"
                },
                {
                    "name": "translations",
                    "short": "An array of translations objects with the localised version of the subscription type in each available locale within your translation settings.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "type",
                    "short": "The type of the object - subscription",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "subscription_type",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/subscription_types",
                            "segments": [
                                {
                                    "lit": "subscription_types"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "subscription_types"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tag": {
            "fields": [
                {
                    "name": "admin_id",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "Optional id of the teammate to attribute the tagging to.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "applied_at",
                    "short": "The time when the tag was applied to the object.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "applied_by",
                    "short": "The admin who applied the tag.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "companies",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "The id of the tag",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "The name of the tag",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "value is \"tag\"",
                    "type": "`$STRING`"
                },
                {
                    "name": "users",
                    "type": "`$ARRAY`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "tag",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 123,
                                        "kind": "param",
                                        "name": "article_id",
                                        "orig": "article_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/articles/{article_id}/tags",
                            "segments": [
                                {
                                    "lit": "articles"
                                },
                                {
                                    "var": "article_id"
                                },
                                {
                                    "lit": "tags"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "article_id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.applied_by`"
                            },
                            "parts": [
                                "articles",
                                "{article_id}",
                                "tags"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "63a07ddf05a32042dffac965",
                                        "kind": "param",
                                        "name": "contact_id",
                                        "orig": "contact_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/contacts/{contact_id}/tags",
                            "segments": [
                                {
                                    "lit": "contacts"
                                },
                                {
                                    "var": "contact_id"
                                },
                                {
                                    "lit": "tags"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "contact_id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.applied_by`"
                            },
                            "parts": [
                                "contacts",
                                "{contact_id}",
                                "tags"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "content_snippet_id",
                                        "orig": "content_snippet_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/content_snippets/{content_snippet_id}/tags",
                            "segments": [
                                {
                                    "lit": "content_snippets"
                                },
                                {
                                    "var": "content_snippet_id"
                                },
                                {
                                    "lit": "tags"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "content_snippet_id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.applied_by`"
                            },
                            "parts": [
                                "content_snippets",
                                "{content_snippet_id}",
                                "tags"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "64619700005694",
                                        "kind": "param",
                                        "name": "conversation_id",
                                        "orig": "conversation_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/conversations/{conversation_id}/tags",
                            "segments": [
                                {
                                    "lit": "conversations"
                                },
                                {
                                    "var": "conversation_id"
                                },
                                {
                                    "lit": "tags"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "conversation_id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.applied_by`"
                            },
                            "parts": [
                                "conversations",
                                "{conversation_id}",
                                "tags"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 123,
                                        "kind": "param",
                                        "name": "internal_article_id",
                                        "orig": "internal_article_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/internal_articles/{internal_article_id}/tags",
                            "segments": [
                                {
                                    "lit": "internal_articles"
                                },
                                {
                                    "var": "internal_article_id"
                                },
                                {
                                    "lit": "tags"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version",
                                    "internal_article_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.applied_by`"
                            },
                            "parts": [
                                "internal_articles",
                                "{internal_article_id}",
                                "tags"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "64619700005694",
                                        "kind": "param",
                                        "name": "ticket_id",
                                        "orig": "ticket_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/tickets/{ticket_id}/tags",
                            "segments": [
                                {
                                    "lit": "tickets"
                                },
                                {
                                    "var": "ticket_id"
                                },
                                {
                                    "lit": "tags"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version",
                                    "ticket_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.applied_by`"
                            },
                            "parts": [
                                "tickets",
                                "{ticket_id}",
                                "tags"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/tags",
                            "segments": [
                                {
                                    "lit": "tags"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "tags"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "63a07ddf05a32042dffac965",
                                        "kind": "param",
                                        "name": "contact_id",
                                        "orig": "contact_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/contacts/{contact_id}/tags",
                            "segments": [
                                {
                                    "lit": "contacts"
                                },
                                {
                                    "var": "contact_id"
                                },
                                {
                                    "lit": "tags"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "contact_id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "contacts",
                                "{contact_id}",
                                "tags"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/tags",
                            "segments": [
                                {
                                    "lit": "tags"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "tags"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "tag_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/tags/{tag_id}",
                            "rename": {
                                "param": {
                                    "tag_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "tags"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "tags",
                                "{id}"
                            ]
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 123,
                                        "kind": "param",
                                        "name": "article_id",
                                        "orig": "article_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": "7522907",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/articles/{article_id}/tags/{id}",
                            "segments": [
                                {
                                    "lit": "articles"
                                },
                                {
                                    "var": "article_id"
                                },
                                {
                                    "lit": "tags"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "article_id",
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.applied_by`"
                            },
                            "parts": [
                                "articles",
                                "{article_id}",
                                "tags",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "63a07ddf05a32042dffac965",
                                        "kind": "param",
                                        "name": "contact_id",
                                        "orig": "contact_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "7522907",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "tag_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/contacts/{contact_id}/tags/{tag_id}",
                            "rename": {
                                "param": {
                                    "tag_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "contacts"
                                },
                                {
                                    "var": "contact_id"
                                },
                                {
                                    "lit": "tags"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "contact_id",
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.applied_by`"
                            },
                            "parts": [
                                "contacts",
                                "{contact_id}",
                                "tags",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "content_snippet_id",
                                        "orig": "content_snippet_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "7522907",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/content_snippets/{content_snippet_id}/tags/{id}",
                            "segments": [
                                {
                                    "lit": "content_snippets"
                                },
                                {
                                    "var": "content_snippet_id"
                                },
                                {
                                    "lit": "tags"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "content_snippet_id",
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.applied_by`"
                            },
                            "parts": [
                                "content_snippets",
                                "{content_snippet_id}",
                                "tags",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "64619700005694",
                                        "kind": "param",
                                        "name": "conversation_id",
                                        "orig": "conversation_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "7522907",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "tag_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/conversations/{conversation_id}/tags/{tag_id}",
                            "rename": {
                                "param": {
                                    "tag_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "conversations"
                                },
                                {
                                    "var": "conversation_id"
                                },
                                {
                                    "lit": "tags"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "conversation_id",
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.applied_by`"
                            },
                            "parts": [
                                "conversations",
                                "{conversation_id}",
                                "tags",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "7522907",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 123,
                                        "kind": "param",
                                        "name": "internal_article_id",
                                        "orig": "internal_article_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/internal_articles/{internal_article_id}/tags/{id}",
                            "segments": [
                                {
                                    "lit": "internal_articles"
                                },
                                {
                                    "var": "internal_article_id"
                                },
                                {
                                    "lit": "tags"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version",
                                    "internal_article_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.applied_by`"
                            },
                            "parts": [
                                "internal_articles",
                                "{internal_article_id}",
                                "tags",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "7522907",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "tag_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "64619700005694",
                                        "kind": "param",
                                        "name": "ticket_id",
                                        "orig": "ticket_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/tickets/{ticket_id}/tags/{tag_id}",
                            "rename": {
                                "param": {
                                    "tag_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "tickets"
                                },
                                {
                                    "var": "ticket_id"
                                },
                                {
                                    "lit": "tags"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version",
                                    "ticket_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.applied_by`"
                            },
                            "parts": [
                                "tickets",
                                "{ticket_id}",
                                "tags",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "tag_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/tags/{tag_id}",
                            "rename": {
                                "param": {
                                    "tag_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "tags"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "tags",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "article"
                    ],
                    [
                        "contact"
                    ],
                    [
                        "content_snippet"
                    ],
                    [
                        "conversation"
                    ],
                    [
                        "internal_article"
                    ],
                    [
                        "ticket"
                    ]
                ]
            }
        },
        "team": {
            "fields": [
                {
                    "name": "admin_ids",
                    "short": "The list of admin IDs that are a part of the team.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "admin_priority_level",
                    "short": "Admin priority levels for the team",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "assignment_limit",
                    "short": "The assignment limit for the team.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "distribution_method",
                    "short": "Describes how assignments are distributed among the team members",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "The id of the team",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "The name of the team",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "Value is always \"team\"",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "team",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/teams",
                            "segments": [
                                {
                                    "lit": "teams"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.teams`"
                            },
                            "parts": [
                                "teams"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "team_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/teams/{team_id}",
                            "rename": {
                                "param": {
                                    "team_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "teams"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "teams",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "team_metric_list": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "team_metric_list",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "42",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "team_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": 1800,
                                        "kind": "query",
                                        "name": "idle_threshold",
                                        "orig": "idle_threshold",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/teams/{team_id}/metrics",
                            "rename": {
                                "param": {
                                    "team_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "teams"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "metrics"
                                }
                            ],
                            "select": {
                                "$action": "metrics",
                                "exist": [
                                    "id",
                                    "idle_threshold",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "teams",
                                "{id}",
                                "metrics"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "ticket": {
            "fields": [
                {
                    "name": "admin_assignee_id",
                    "short": "The id representing the admin assigned to the ticket.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "attributes",
                    "short": "The attributes set on the ticket.",
                    "type": "`$OBJECT`",
                    "union": {
                        "branches": 4,
                        "count": 1,
                        "depth": 1
                    }
                },
                {
                    "name": "category",
                    "short": "Category of the Ticket.",
                    "type": "`$STRING`"
                },
                {
                    "name": "contacts",
                    "short": "The list of contacts affected by a ticket.",
                    "type": "`$OBJECT`"
                },
                {
                    "format": "date-time",
                    "name": "created_at",
                    "short": "The time the ticket was created as a UTC Unix timestamp.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "short": "The unique identifier for the ticket which is given by Intercom.",
                    "type": "`$STRING`"
                },
                {
                    "name": "is_shared",
                    "short": "Whether or not the ticket is shared with the customer.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "linked_objects",
                    "short": "An object containing metadata about linked conversations and linked tickets.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "open",
                    "short": "Whether or not the ticket is open.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "previous_ticket_state_id",
                    "short": "The ID of the previous ticket state from the most recent state change.",
                    "type": "`$STRING`"
                },
                {
                    "name": "skip_notifications",
                    "short": "Option to disable notifications when a Ticket is created.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "format": "date-time",
                    "name": "snoozed_until",
                    "short": "The time the ticket will be snoozed until as a UTC Unix timestamp.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "team_assignee_id",
                    "short": "The id representing the team assigned to the ticket.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "ticket_attributes",
                    "short": "An object containing the different attributes associated to the ticket as key-value pairs.",
                    "type": "`$OBJECT`",
                    "union": {
                        "branches": 5,
                        "count": 1,
                        "depth": 1
                    }
                },
                {
                    "name": "ticket_id",
                    "short": "The ID of the Ticket used in the Intercom Inbox and Messenger.",
                    "type": "`$STRING`"
                },
                {
                    "name": "ticket_parts",
                    "short": "A list of Ticket Part objects for each note and event in the ticket.",
                    "type": "`$OBJECT`",
                    "union": {
                        "branches": 2,
                        "count": 2,
                        "depth": 9
                    }
                },
                {
                    "name": "ticket_state",
                    "short": "A ticket state, used to define the state of a ticket.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "ticket_state_id",
                    "short": "The ID of the ticket state associated with the ticket type.",
                    "type": "`$STRING`"
                },
                {
                    "name": "ticket_type",
                    "short": "A ticket type, used to define the data fields to be captured in a ticket.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "ticket_type_id",
                    "req": true,
                    "short": "The ID of the type of ticket you want to convert the conversation to",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "Always ticket",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "updated_at",
                    "short": "The last time the ticket was updated as a UTC Unix timestamp.",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "ticket",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 123,
                                        "kind": "param",
                                        "name": "conversation_id",
                                        "orig": "conversation_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/conversations/{conversation_id}/convert",
                            "segments": [
                                {
                                    "lit": "conversations"
                                },
                                {
                                    "var": "conversation_id"
                                },
                                {
                                    "lit": "convert"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "conversation_id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "conversations",
                                "{conversation_id}",
                                "convert"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "ticket_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/tickets/{ticket_id}/change_type",
                            "rename": {
                                "param": {
                                    "ticket_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "tickets"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "change_type"
                                }
                            ],
                            "select": {
                                "$action": "change_type",
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "tickets",
                                "{id}",
                                "change_type"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/tickets",
                            "segments": [
                                {
                                    "lit": "tickets"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "tickets"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "ticket_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/tickets/{ticket_id}",
                            "rename": {
                                "param": {
                                    "ticket_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "tickets"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "tickets",
                                "{id}"
                            ]
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "ticket_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/tickets/{ticket_id}",
                            "rename": {
                                "param": {
                                    "ticket_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "tickets"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "tickets",
                                "{id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "ticket_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/tickets/{ticket_id}",
                            "rename": {
                                "param": {
                                    "ticket_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "tickets"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "tickets",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "conversation"
                    ]
                ]
            }
        },
        "ticket_list": {
            "fields": [
                {
                    "name": "pages",
                    "short": "Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "pagination",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "query",
                    "req": true,
                    "type": "`$ANY`",
                    "union": {
                        "branches": 4,
                        "count": 4,
                        "depth": 7
                    }
                },
                {
                    "name": "tickets",
                    "short": "The list of ticket objects",
                    "type": "`$ARRAY`",
                    "union": {
                        "branches": 5,
                        "count": 3,
                        "depth": 12
                    }
                },
                {
                    "name": "total_count",
                    "short": "A count of the total number of objects.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "type",
                    "short": "Always ticket.list",
                    "type": "`$STRING`"
                }
            ],
            "name": "ticket_list",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/tickets/search",
                            "segments": [
                                {
                                    "lit": "tickets"
                                },
                                {
                                    "lit": "search"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "tickets",
                                "search"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "ticket_reply": {
            "fields": [
                {
                    "name": "attachments",
                    "short": "A list of attachments for the part.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "author",
                    "short": "The author that wrote or triggered the part.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "body",
                    "short": "The message body, which may contain HTML.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "created_at",
                    "short": "The time the note was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "short": "The id representing the part.",
                    "type": "`$STRING`"
                },
                {
                    "name": "part_type",
                    "short": "Type of the part",
                    "type": "`$STRING`"
                },
                {
                    "name": "redacted",
                    "short": "Whether or not the ticket part has been redacted.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "skip_notifications",
                    "short": "Option to disable notifications when replying to a Ticket.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "type",
                    "short": "Always ticket_part",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "updated_at",
                    "short": "The last time the note was updated.",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "ticket_reply",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "123",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "ticket_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/tickets/{ticket_id}/reply",
                            "rename": {
                                "param": {
                                    "ticket_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "tickets"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "reply"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "tickets",
                                "{id}",
                                "reply"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "ticket_state": {
            "fields": [
                {
                    "name": "archived",
                    "short": "Whether the ticket state is archived",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "category",
                    "short": "The category of the ticket state",
                    "type": "`$STRING`"
                },
                {
                    "name": "external_label",
                    "short": "The state the ticket is currently in, in a human readable form - visible to customers, in the messenger, email and tickets portal.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "The id of the ticket state",
                    "type": "`$STRING`"
                },
                {
                    "name": "internal_label",
                    "short": "The state the ticket is currently in, in a human readable form - visible in Intercom",
                    "type": "`$STRING`"
                },
                {
                    "name": "ticket_types",
                    "short": "A list of ticket types associated with a given ticket state.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "type",
                    "short": "String representing the object's type.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "ticket_state",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/ticket_states",
                            "segments": [
                                {
                                    "lit": "ticket_states"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "ticket_states"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "ticket_type": {
            "fields": [
                {
                    "name": "archived",
                    "short": "Whether the ticket type is archived or not.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "category",
                    "short": "Category of the Ticket Type.",
                    "type": "`$STRING`"
                },
                {
                    "format": "timestamp",
                    "name": "created_at",
                    "short": "The date and time the ticket type was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "description",
                    "short": "The description of the ticket type",
                    "type": "`$STRING`"
                },
                {
                    "name": "icon",
                    "short": "The icon of the ticket type",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "The id representing the ticket type.",
                    "type": "`$STRING`"
                },
                {
                    "name": "is_internal",
                    "short": "Whether the tickets associated with this ticket type are intended for internal use only or will be shared with customers.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "name",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "The name of the ticket type",
                    "type": "`$STRING`"
                },
                {
                    "name": "ticket_states",
                    "short": "A list of ticket states associated with a given ticket type.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "ticket_type_attributes",
                    "short": "A list of attributes associated with a given ticket type.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "type",
                    "short": "String representing the object's type.",
                    "type": "`$STRING`"
                },
                {
                    "format": "timestamp",
                    "name": "updated_at",
                    "short": "The date and time the ticket type was last updated.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "workspace_id",
                    "short": "The id of the workspace that the ticket type belongs to.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "ticket_type",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/ticket_types",
                            "segments": [
                                {
                                    "lit": "ticket_types"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "ticket_types"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/ticket_types",
                            "segments": [
                                {
                                    "lit": "ticket_types"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "ticket_types"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "ticket_type_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/ticket_types/{ticket_type_id}",
                            "rename": {
                                "param": {
                                    "ticket_type_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "ticket_types"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "ticket_types",
                                "{id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "ticket_type_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/ticket_types/{ticket_type_id}",
                            "rename": {
                                "param": {
                                    "ticket_type_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "ticket_types"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "ticket_types",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "ticket_type_attribute": {
            "fields": [
                {
                    "name": "allow_multiple_values",
                    "short": "Whether the attribute allows multiple files to be attached to it (only applicable to file attributes)",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "archived",
                    "short": "Whether the attribute should be archived and not shown during creation of the ticket (it will still be present on previously created tickets)",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "data_type",
                    "req": true,
                    "short": "The data type of the attribute",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "op": {
                        "update": {
                            "type": "`$STRING`"
                        }
                    },
                    "req": true,
                    "short": "The description of the attribute presented to the teammate or contact",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "list_items",
                    "short": "A comma delimited list of items for the attribute value (only applicable to list attributes)",
                    "type": "`$STRING`"
                },
                {
                    "name": "multiline",
                    "short": "Whether the attribute allows multiple lines of text (only applicable to string attributes)",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "name",
                    "op": {
                        "update": {
                            "type": "`$STRING`"
                        }
                    },
                    "req": true,
                    "short": "The name of the ticket type attribute",
                    "type": "`$STRING`"
                },
                {
                    "name": "required_to_create",
                    "short": "Whether the attribute is required to be filled in when teammates are creating the ticket in Inbox.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "required_to_create_for_contacts",
                    "short": "Whether the attribute is required to be filled in when contacts are creating the ticket in Messenger.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "visible_on_create",
                    "short": "Whether the attribute is visible to teammates when creating a ticket in Inbox.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "visible_to_contacts",
                    "short": "Whether the attribute is visible to contacts when creating a ticket in Messenger.",
                    "type": "`$BOOLEAN`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "ticket_type_attribute",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "ticket_type_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/ticket_types/{ticket_type_id}/attributes",
                            "rename": {
                                "param": {
                                    "ticket_type_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "ticket_types"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "attributes"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.input_options`"
                            },
                            "parts": [
                                "ticket_types",
                                "{id}",
                                "attributes"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "attribute_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "ticket_type_id",
                                        "orig": "ticket_type_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/ticket_types/{ticket_type_id}/attributes/{attribute_id}",
                            "rename": {
                                "param": {
                                    "attribute_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "ticket_types"
                                },
                                {
                                    "var": "ticket_type_id"
                                },
                                {
                                    "lit": "attributes"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version",
                                    "ticket_type_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.input_options`"
                            },
                            "parts": [
                                "ticket_types",
                                "{ticket_type_id}",
                                "attributes",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "ticket_type"
                    ]
                ]
            }
        },
        "visitor": {
            "fields": [
                {
                    "name": "anonymous",
                    "short": "Identifies if this visitor is anonymous.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "app_id",
                    "short": "The id of the app the visitor is associated with.",
                    "type": "`$STRING`"
                },
                {
                    "name": "avatar",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "companies",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "created_at",
                    "short": "The time the Visitor was added to Intercom.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "custom_attributes",
                    "short": "The custom attributes you have set on the Visitor.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "do_not_track",
                    "short": "Identifies if this visitor has do not track enabled.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "format": "email",
                    "name": "email",
                    "short": "The email of the visitor.",
                    "type": "`$STRING`"
                },
                {
                    "name": "has_hard_bounced",
                    "short": "Identifies if this visitor has had a hard bounce.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "id",
                    "short": "The Intercom defined id representing the Visitor.",
                    "type": "`$STRING`"
                },
                {
                    "name": "las_request_at",
                    "short": "The time the Lead last recorded making a request.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "location_data",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "marked_email_as_spam",
                    "short": "Identifies if this visitor has marked an email as spam.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "name",
                    "short": "The name of the visitor.",
                    "type": "`$STRING`"
                },
                {
                    "name": "owner_id",
                    "short": "The id of the admin that owns the Visitor.",
                    "type": "`$STRING`"
                },
                {
                    "name": "phone",
                    "short": "The phone number of the visitor.",
                    "type": "`$STRING`"
                },
                {
                    "name": "pseudonym",
                    "short": "The pseudonym of the visitor.",
                    "type": "`$STRING`"
                },
                {
                    "name": "referrer",
                    "short": "The referer of the visitor.",
                    "type": "`$STRING`"
                },
                {
                    "name": "remote_created_at",
                    "short": "The time the Visitor was added to Intercom.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "segments",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "session_count",
                    "short": "The number of sessions the Visitor has had.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "signed_up_at",
                    "short": "The time the Visitor signed up for your product.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "social_profiles",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "tags",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "type",
                    "short": "Value is 'visitor'",
                    "type": "`$STRING`"
                },
                {
                    "name": "unsubscribed_from_emails",
                    "short": "Whether the Visitor is unsubscribed from emails.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "updated_at",
                    "short": "The last time the Visitor was updated.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "user_id",
                    "short": "Automatically generated identifier for the Visitor.",
                    "type": "`$STRING`"
                },
                {
                    "name": "utm_campaign",
                    "short": "The utm_campaign of the visitor.",
                    "type": "`$STRING`"
                },
                {
                    "name": "utm_content",
                    "short": "The utm_content of the visitor.",
                    "type": "`$STRING`"
                },
                {
                    "name": "utm_medium",
                    "short": "The utm_medium of the visitor.",
                    "type": "`$STRING`"
                },
                {
                    "name": "utm_source",
                    "short": "The utm_source of the visitor.",
                    "type": "`$STRING`"
                },
                {
                    "name": "utm_term",
                    "short": "The utm_term of the visitor.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "visitor",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "user_id",
                                        "orig": "user_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/visitors",
                            "segments": [
                                {
                                    "lit": "visitors"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version",
                                    "user_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "visitors"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/visitors",
                            "segments": [
                                {
                                    "lit": "visitors"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "visitors"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "whatsapp_message_status": {
            "fields": [
                {
                    "name": "details",
                    "short": "Detailed error information",
                    "type": "`$STRING`"
                },
                {
                    "name": "message",
                    "short": "Error message",
                    "type": "`$STRING`"
                }
            ],
            "name": "whatsapp_message_status",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "message_id",
                                        "orig": "message_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/messages/whatsapp/status",
                            "segments": [
                                {
                                    "lit": "messages"
                                },
                                {
                                    "lit": "whatsapp"
                                },
                                {
                                    "lit": "status"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version",
                                    "message_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.error`"
                            },
                            "parts": [
                                "messages",
                                "whatsapp",
                                "status"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "whatsapp_message_status_list": {
            "fields": [
                {
                    "name": "conversation_id",
                    "req": true,
                    "short": "ID of the conversation",
                    "type": "`$STRING`"
                },
                {
                    "name": "created_at",
                    "req": true,
                    "short": "Creation timestamp",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "req": true,
                    "short": "Event ID",
                    "type": "`$STRING`"
                },
                {
                    "name": "status",
                    "req": true,
                    "short": "Current status of the message",
                    "type": "`$STRING`"
                },
                {
                    "name": "template_name",
                    "short": "Name of the WhatsApp template used",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "req": true,
                    "short": "Event type",
                    "type": "`$STRING`"
                },
                {
                    "name": "updated_at",
                    "req": true,
                    "short": "Last update timestamp",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "whatsapp_message_id",
                    "req": true,
                    "short": "WhatsApp's message identifier",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "whatsapp_message_status_list",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": 50,
                                        "kind": "query",
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "ruleset_id",
                                        "orig": "ruleset_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "starting_after",
                                        "orig": "starting_after",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/messages/status",
                            "segments": [
                                {
                                    "lit": "messages"
                                },
                                {
                                    "lit": "status"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "intercom_version",
                                    "per_page",
                                    "ruleset_id",
                                    "starting_after"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "messages",
                                "status"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "workflow": {
            "fields": [
                {
                    "name": "attributes",
                    "short": "Custom attributes defined for this workflow.",
                    "type": "`$ARRAY`"
                },
                {
                    "format": "date-time",
                    "name": "created_at",
                    "short": "When the workflow was created.",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "short": "The description of the workflow.",
                    "type": "`$STRING`"
                },
                {
                    "name": "embedded_rules",
                    "short": "Rules embedded within the workflow steps.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "short": "The unique identifier for the workflow.",
                    "type": "`$STRING`"
                },
                {
                    "name": "preferred_devices",
                    "short": "The preferred devices for this workflow.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "snapshot",
                    "short": "The current snapshot of workflow steps and configuration.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "state",
                    "short": "The current state of the workflow.",
                    "type": "`$STRING`"
                },
                {
                    "name": "target_channels",
                    "short": "The channels this workflow targets.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "targeting",
                    "short": "The targeting rules for this workflow.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "title",
                    "short": "The title of the workflow.",
                    "type": "`$STRING`"
                },
                {
                    "name": "trigger_type",
                    "short": "The type of trigger that starts this workflow.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "updated_at",
                    "short": "When the workflow was last updated.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "workflow",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": "2.16",
                                        "kind": "header",
                                        "name": "intercom_version",
                                        "orig": "intercom_version",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": "12345",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/export/workflows/{id}",
                            "segments": [
                                {
                                    "lit": "export"
                                },
                                {
                                    "lit": "workflows"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "intercom_version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.workflow`"
                            },
                            "parts": [
                                "export",
                                "workflows",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map