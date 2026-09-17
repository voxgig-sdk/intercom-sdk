<?php
declare(strict_types=1);

// Intercom SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class IntercomSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new IntercomUtility();
        $this->_utility = $utility;

        $config = IntercomConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = IntercomHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = IntercomHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!IntercomFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, IntercomFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return IntercomUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = IntercomHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = IntercomHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = IntercomHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new IntercomSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new IntercomError($op . "_allow",
                "IntercomSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = IntercomHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = IntercomHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new IntercomError("graphql_error",
                "IntercomSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_activity_log = null;

    // Canonical facade: $client->ActivityLog()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->activity_log()
    // resolves here too.
    public function ActivityLog($data = null)
    {
        require_once __DIR__ . '/entity/activity_log_entity.php';
        if ($data === null) {
            if ($this->_activity_log === null) {
                $this->_activity_log = new ActivityLogEntity($this, null);
            }
            return $this->_activity_log;
        }
        return new ActivityLogEntity($this, $data);
    }


    private $_activity_log_event_type = null;

    // Canonical facade: $client->ActivityLogEventType()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->activity_log_event_type()
    // resolves here too.
    public function ActivityLogEventType($data = null)
    {
        require_once __DIR__ . '/entity/activity_log_event_type_entity.php';
        if ($data === null) {
            if ($this->_activity_log_event_type === null) {
                $this->_activity_log_event_type = new ActivityLogEventTypeEntity($this, null);
            }
            return $this->_activity_log_event_type;
        }
        return new ActivityLogEventTypeEntity($this, $data);
    }


    private $_activity_log_list = null;

    // Canonical facade: $client->ActivityLogList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->activity_log_list()
    // resolves here too.
    public function ActivityLogList($data = null)
    {
        require_once __DIR__ . '/entity/activity_log_list_entity.php';
        if ($data === null) {
            if ($this->_activity_log_list === null) {
                $this->_activity_log_list = new ActivityLogListEntity($this, null);
            }
            return $this->_activity_log_list;
        }
        return new ActivityLogListEntity($this, $data);
    }


    private $_admin = null;

    // Canonical facade: $client->Admin()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->admin()
    // resolves here too.
    public function Admin($data = null)
    {
        require_once __DIR__ . '/entity/admin_entity.php';
        if ($data === null) {
            if ($this->_admin === null) {
                $this->_admin = new AdminEntity($this, null);
            }
            return $this->_admin;
        }
        return new AdminEntity($this, $data);
    }


    private $_admin_with_app = null;

    // Canonical facade: $client->AdminWithApp()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->admin_with_app()
    // resolves here too.
    public function AdminWithApp($data = null)
    {
        require_once __DIR__ . '/entity/admin_with_app_entity.php';
        if ($data === null) {
            if ($this->_admin_with_app === null) {
                $this->_admin_with_app = new AdminWithAppEntity($this, null);
            }
            return $this->_admin_with_app;
        }
        return new AdminWithAppEntity($this, $data);
    }


    private $_ai_call = null;

    // Canonical facade: $client->AiCall()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ai_call()
    // resolves here too.
    public function AiCall($data = null)
    {
        require_once __DIR__ . '/entity/ai_call_entity.php';
        if ($data === null) {
            if ($this->_ai_call === null) {
                $this->_ai_call = new AiCallEntity($this, null);
            }
            return $this->_ai_call;
        }
        return new AiCallEntity($this, $data);
    }


    private $_ai_content = null;

    // Canonical facade: $client->AiContent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ai_content()
    // resolves here too.
    public function AiContent($data = null)
    {
        require_once __DIR__ . '/entity/ai_content_entity.php';
        if ($data === null) {
            if ($this->_ai_content === null) {
                $this->_ai_content = new AiContentEntity($this, null);
            }
            return $this->_ai_content;
        }
        return new AiContentEntity($this, $data);
    }


    private $_article = null;

    // Canonical facade: $client->Article()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->article()
    // resolves here too.
    public function Article($data = null)
    {
        require_once __DIR__ . '/entity/article_entity.php';
        if ($data === null) {
            if ($this->_article === null) {
                $this->_article = new ArticleEntity($this, null);
            }
            return $this->_article;
        }
        return new ArticleEntity($this, $data);
    }


    private $_article_search = null;

    // Canonical facade: $client->ArticleSearch()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->article_search()
    // resolves here too.
    public function ArticleSearch($data = null)
    {
        require_once __DIR__ . '/entity/article_search_entity.php';
        if ($data === null) {
            if ($this->_article_search === null) {
                $this->_article_search = new ArticleSearchEntity($this, null);
            }
            return $this->_article_search;
        }
        return new ArticleSearchEntity($this, $data);
    }


    private $_article_version = null;

    // Canonical facade: $client->ArticleVersion()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->article_version()
    // resolves here too.
    public function ArticleVersion($data = null)
    {
        require_once __DIR__ . '/entity/article_version_entity.php';
        if ($data === null) {
            if ($this->_article_version === null) {
                $this->_article_version = new ArticleVersionEntity($this, null);
            }
            return $this->_article_version;
        }
        return new ArticleVersionEntity($this, $data);
    }


    private $_article_version_list = null;

    // Canonical facade: $client->ArticleVersionList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->article_version_list()
    // resolves here too.
    public function ArticleVersionList($data = null)
    {
        require_once __DIR__ . '/entity/article_version_list_entity.php';
        if ($data === null) {
            if ($this->_article_version_list === null) {
                $this->_article_version_list = new ArticleVersionListEntity($this, null);
            }
            return $this->_article_version_list;
        }
        return new ArticleVersionListEntity($this, $data);
    }


    private $_audience = null;

    // Canonical facade: $client->Audience()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->audience()
    // resolves here too.
    public function Audience($data = null)
    {
        require_once __DIR__ . '/entity/audience_entity.php';
        if ($data === null) {
            if ($this->_audience === null) {
                $this->_audience = new AudienceEntity($this, null);
            }
            return $this->_audience;
        }
        return new AudienceEntity($this, $data);
    }


    private $_away_status_reason = null;

    // Canonical facade: $client->AwayStatusReason()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->away_status_reason()
    // resolves here too.
    public function AwayStatusReason($data = null)
    {
        require_once __DIR__ . '/entity/away_status_reason_entity.php';
        if ($data === null) {
            if ($this->_away_status_reason === null) {
                $this->_away_status_reason = new AwayStatusReasonEntity($this, null);
            }
            return $this->_away_status_reason;
        }
        return new AwayStatusReasonEntity($this, $data);
    }


    private $_banner = null;

    // Canonical facade: $client->Banner()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->banner()
    // resolves here too.
    public function Banner($data = null)
    {
        require_once __DIR__ . '/entity/banner_entity.php';
        if ($data === null) {
            if ($this->_banner === null) {
                $this->_banner = new BannerEntity($this, null);
            }
            return $this->_banner;
        }
        return new BannerEntity($this, $data);
    }


    private $_banner_dismiss = null;

    // Canonical facade: $client->BannerDismiss()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->banner_dismiss()
    // resolves here too.
    public function BannerDismiss($data = null)
    {
        require_once __DIR__ . '/entity/banner_dismiss_entity.php';
        if ($data === null) {
            if ($this->_banner_dismiss === null) {
                $this->_banner_dismiss = new BannerDismissEntity($this, null);
            }
            return $this->_banner_dismiss;
        }
        return new BannerDismissEntity($this, $data);
    }


    private $_brand = null;

    // Canonical facade: $client->Brand()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->brand()
    // resolves here too.
    public function Brand($data = null)
    {
        require_once __DIR__ . '/entity/brand_entity.php';
        if ($data === null) {
            if ($this->_brand === null) {
                $this->_brand = new BrandEntity($this, null);
            }
            return $this->_brand;
        }
        return new BrandEntity($this, $data);
    }


    private $_call = null;

    // Canonical facade: $client->Call()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->call()
    // resolves here too.
    public function Call($data = null)
    {
        require_once __DIR__ . '/entity/call_entity.php';
        if ($data === null) {
            if ($this->_call === null) {
                $this->_call = new CallEntity($this, null);
            }
            return $this->_call;
        }
        return new CallEntity($this, $data);
    }


    private $_company = null;

    // Canonical facade: $client->Company()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->company()
    // resolves here too.
    public function Company($data = null)
    {
        require_once __DIR__ . '/entity/company_entity.php';
        if ($data === null) {
            if ($this->_company === null) {
                $this->_company = new CompanyEntity($this, null);
            }
            return $this->_company;
        }
        return new CompanyEntity($this, $data);
    }


    private $_company_attached_contact = null;

    // Canonical facade: $client->CompanyAttachedContact()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->company_attached_contact()
    // resolves here too.
    public function CompanyAttachedContact($data = null)
    {
        require_once __DIR__ . '/entity/company_attached_contact_entity.php';
        if ($data === null) {
            if ($this->_company_attached_contact === null) {
                $this->_company_attached_contact = new CompanyAttachedContactEntity($this, null);
            }
            return $this->_company_attached_contact;
        }
        return new CompanyAttachedContactEntity($this, $data);
    }


    private $_company_attached_segment = null;

    // Canonical facade: $client->CompanyAttachedSegment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->company_attached_segment()
    // resolves here too.
    public function CompanyAttachedSegment($data = null)
    {
        require_once __DIR__ . '/entity/company_attached_segment_entity.php';
        if ($data === null) {
            if ($this->_company_attached_segment === null) {
                $this->_company_attached_segment = new CompanyAttachedSegmentEntity($this, null);
            }
            return $this->_company_attached_segment;
        }
        return new CompanyAttachedSegmentEntity($this, $data);
    }


    private $_company_list = null;

    // Canonical facade: $client->CompanyList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->company_list()
    // resolves here too.
    public function CompanyList($data = null)
    {
        require_once __DIR__ . '/entity/company_list_entity.php';
        if ($data === null) {
            if ($this->_company_list === null) {
                $this->_company_list = new CompanyListEntity($this, null);
            }
            return $this->_company_list;
        }
        return new CompanyListEntity($this, $data);
    }


    private $_company_scroll = null;

    // Canonical facade: $client->CompanyScroll()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->company_scroll()
    // resolves here too.
    public function CompanyScroll($data = null)
    {
        require_once __DIR__ . '/entity/company_scroll_entity.php';
        if ($data === null) {
            if ($this->_company_scroll === null) {
                $this->_company_scroll = new CompanyScrollEntity($this, null);
            }
            return $this->_company_scroll;
        }
        return new CompanyScrollEntity($this, $data);
    }


    private $_contact = null;

    // Canonical facade: $client->Contact()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->contact()
    // resolves here too.
    public function Contact($data = null)
    {
        require_once __DIR__ . '/entity/contact_entity.php';
        if ($data === null) {
            if ($this->_contact === null) {
                $this->_contact = new ContactEntity($this, null);
            }
            return $this->_contact;
        }
        return new ContactEntity($this, $data);
    }


    private $_contact_attached_company = null;

    // Canonical facade: $client->ContactAttachedCompany()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->contact_attached_company()
    // resolves here too.
    public function ContactAttachedCompany($data = null)
    {
        require_once __DIR__ . '/entity/contact_attached_company_entity.php';
        if ($data === null) {
            if ($this->_contact_attached_company === null) {
                $this->_contact_attached_company = new ContactAttachedCompanyEntity($this, null);
            }
            return $this->_contact_attached_company;
        }
        return new ContactAttachedCompanyEntity($this, $data);
    }


    private $_contact_list = null;

    // Canonical facade: $client->ContactList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->contact_list()
    // resolves here too.
    public function ContactList($data = null)
    {
        require_once __DIR__ . '/entity/contact_list_entity.php';
        if ($data === null) {
            if ($this->_contact_list === null) {
                $this->_contact_list = new ContactListEntity($this, null);
            }
            return $this->_contact_list;
        }
        return new ContactListEntity($this, $data);
    }


    private $_contact_segment = null;

    // Canonical facade: $client->ContactSegment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->contact_segment()
    // resolves here too.
    public function ContactSegment($data = null)
    {
        require_once __DIR__ . '/entity/contact_segment_entity.php';
        if ($data === null) {
            if ($this->_contact_segment === null) {
                $this->_contact_segment = new ContactSegmentEntity($this, null);
            }
            return $this->_contact_segment;
        }
        return new ContactSegmentEntity($this, $data);
    }


    private $_content = null;

    // Canonical facade: $client->Content()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->content()
    // resolves here too.
    public function Content($data = null)
    {
        require_once __DIR__ . '/entity/content_entity.php';
        if ($data === null) {
            if ($this->_content === null) {
                $this->_content = new ContentEntity($this, null);
            }
            return $this->_content;
        }
        return new ContentEntity($this, $data);
    }


    private $_content_import_source = null;

    // Canonical facade: $client->ContentImportSource()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->content_import_source()
    // resolves here too.
    public function ContentImportSource($data = null)
    {
        require_once __DIR__ . '/entity/content_import_source_entity.php';
        if ($data === null) {
            if ($this->_content_import_source === null) {
                $this->_content_import_source = new ContentImportSourceEntity($this, null);
            }
            return $this->_content_import_source;
        }
        return new ContentImportSourceEntity($this, $data);
    }


    private $_content_search = null;

    // Canonical facade: $client->ContentSearch()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->content_search()
    // resolves here too.
    public function ContentSearch($data = null)
    {
        require_once __DIR__ . '/entity/content_search_entity.php';
        if ($data === null) {
            if ($this->_content_search === null) {
                $this->_content_search = new ContentSearchEntity($this, null);
            }
            return $this->_content_search;
        }
        return new ContentSearchEntity($this, $data);
    }


    private $_content_snippet = null;

    // Canonical facade: $client->ContentSnippet()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->content_snippet()
    // resolves here too.
    public function ContentSnippet($data = null)
    {
        require_once __DIR__ . '/entity/content_snippet_entity.php';
        if ($data === null) {
            if ($this->_content_snippet === null) {
                $this->_content_snippet = new ContentSnippetEntity($this, null);
            }
            return $this->_content_snippet;
        }
        return new ContentSnippetEntity($this, $data);
    }


    private $_conversation = null;

    // Canonical facade: $client->Conversation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversation()
    // resolves here too.
    public function Conversation($data = null)
    {
        require_once __DIR__ . '/entity/conversation_entity.php';
        if ($data === null) {
            if ($this->_conversation === null) {
                $this->_conversation = new ConversationEntity($this, null);
            }
            return $this->_conversation;
        }
        return new ConversationEntity($this, $data);
    }


    private $_conversation_attribute = null;

    // Canonical facade: $client->ConversationAttribute()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversation_attribute()
    // resolves here too.
    public function ConversationAttribute($data = null)
    {
        require_once __DIR__ . '/entity/conversation_attribute_entity.php';
        if ($data === null) {
            if ($this->_conversation_attribute === null) {
                $this->_conversation_attribute = new ConversationAttributeEntity($this, null);
            }
            return $this->_conversation_attribute;
        }
        return new ConversationAttributeEntity($this, $data);
    }


    private $_conversation_attribute_list = null;

    // Canonical facade: $client->ConversationAttributeList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversation_attribute_list()
    // resolves here too.
    public function ConversationAttributeList($data = null)
    {
        require_once __DIR__ . '/entity/conversation_attribute_list_entity.php';
        if ($data === null) {
            if ($this->_conversation_attribute_list === null) {
                $this->_conversation_attribute_list = new ConversationAttributeListEntity($this, null);
            }
            return $this->_conversation_attribute_list;
        }
        return new ConversationAttributeListEntity($this, $data);
    }


    private $_conversation_list = null;

    // Canonical facade: $client->ConversationList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversation_list()
    // resolves here too.
    public function ConversationList($data = null)
    {
        require_once __DIR__ . '/entity/conversation_list_entity.php';
        if ($data === null) {
            if ($this->_conversation_list === null) {
                $this->_conversation_list = new ConversationListEntity($this, null);
            }
            return $this->_conversation_list;
        }
        return new ConversationListEntity($this, $data);
    }


    private $_conversation_participant = null;

    // Canonical facade: $client->ConversationParticipant()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversation_participant()
    // resolves here too.
    public function ConversationParticipant($data = null)
    {
        require_once __DIR__ . '/entity/conversation_participant_entity.php';
        if ($data === null) {
            if ($this->_conversation_participant === null) {
                $this->_conversation_participant = new ConversationParticipantEntity($this, null);
            }
            return $this->_conversation_participant;
        }
        return new ConversationParticipantEntity($this, $data);
    }


    private $_custom_object_instance = null;

    // Canonical facade: $client->CustomObjectInstance()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom_object_instance()
    // resolves here too.
    public function CustomObjectInstance($data = null)
    {
        require_once __DIR__ . '/entity/custom_object_instance_entity.php';
        if ($data === null) {
            if ($this->_custom_object_instance === null) {
                $this->_custom_object_instance = new CustomObjectInstanceEntity($this, null);
            }
            return $this->_custom_object_instance;
        }
        return new CustomObjectInstanceEntity($this, $data);
    }


    private $_data = null;

    // Canonical facade: $client->Data()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->data()
    // resolves here too.
    public function Data($data = null)
    {
        require_once __DIR__ . '/entity/data_entity.php';
        if ($data === null) {
            if ($this->_data === null) {
                $this->_data = new DataEntity($this, null);
            }
            return $this->_data;
        }
        return new DataEntity($this, $data);
    }


    private $_data_attribute = null;

    // Canonical facade: $client->DataAttribute()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->data_attribute()
    // resolves here too.
    public function DataAttribute($data = null)
    {
        require_once __DIR__ . '/entity/data_attribute_entity.php';
        if ($data === null) {
            if ($this->_data_attribute === null) {
                $this->_data_attribute = new DataAttributeEntity($this, null);
            }
            return $this->_data_attribute;
        }
        return new DataAttributeEntity($this, $data);
    }


    private $_data_connector = null;

    // Canonical facade: $client->DataConnector()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->data_connector()
    // resolves here too.
    public function DataConnector($data = null)
    {
        require_once __DIR__ . '/entity/data_connector_entity.php';
        if ($data === null) {
            if ($this->_data_connector === null) {
                $this->_data_connector = new DataConnectorEntity($this, null);
            }
            return $this->_data_connector;
        }
        return new DataConnectorEntity($this, $data);
    }


    private $_data_connector_execution_result = null;

    // Canonical facade: $client->DataConnectorExecutionResult()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->data_connector_execution_result()
    // resolves here too.
    public function DataConnectorExecutionResult($data = null)
    {
        require_once __DIR__ . '/entity/data_connector_execution_result_entity.php';
        if ($data === null) {
            if ($this->_data_connector_execution_result === null) {
                $this->_data_connector_execution_result = new DataConnectorExecutionResultEntity($this, null);
            }
            return $this->_data_connector_execution_result;
        }
        return new DataConnectorExecutionResultEntity($this, $data);
    }


    private $_data_connector_execution_result_list = null;

    // Canonical facade: $client->DataConnectorExecutionResultList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->data_connector_execution_result_list()
    // resolves here too.
    public function DataConnectorExecutionResultList($data = null)
    {
        require_once __DIR__ . '/entity/data_connector_execution_result_list_entity.php';
        if ($data === null) {
            if ($this->_data_connector_execution_result_list === null) {
                $this->_data_connector_execution_result_list = new DataConnectorExecutionResultListEntity($this, null);
            }
            return $this->_data_connector_execution_result_list;
        }
        return new DataConnectorExecutionResultListEntity($this, $data);
    }


    private $_data_event = null;

    // Canonical facade: $client->DataEvent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->data_event()
    // resolves here too.
    public function DataEvent($data = null)
    {
        require_once __DIR__ . '/entity/data_event_entity.php';
        if ($data === null) {
            if ($this->_data_event === null) {
                $this->_data_event = new DataEventEntity($this, null);
            }
            return $this->_data_event;
        }
        return new DataEventEntity($this, $data);
    }


    private $_data_event_summary = null;

    // Canonical facade: $client->DataEventSummary()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->data_event_summary()
    // resolves here too.
    public function DataEventSummary($data = null)
    {
        require_once __DIR__ . '/entity/data_event_summary_entity.php';
        if ($data === null) {
            if ($this->_data_event_summary === null) {
                $this->_data_event_summary = new DataEventSummaryEntity($this, null);
            }
            return $this->_data_event_summary;
        }
        return new DataEventSummaryEntity($this, $data);
    }


    private $_data_export = null;

    // Canonical facade: $client->DataExport()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->data_export()
    // resolves here too.
    public function DataExport($data = null)
    {
        require_once __DIR__ . '/entity/data_export_entity.php';
        if ($data === null) {
            if ($this->_data_export === null) {
                $this->_data_export = new DataExportEntity($this, null);
            }
            return $this->_data_export;
        }
        return new DataExportEntity($this, $data);
    }


    private $_deleted = null;

    // Canonical facade: $client->Deleted()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deleted()
    // resolves here too.
    public function Deleted($data = null)
    {
        require_once __DIR__ . '/entity/deleted_entity.php';
        if ($data === null) {
            if ($this->_deleted === null) {
                $this->_deleted = new DeletedEntity($this, null);
            }
            return $this->_deleted;
        }
        return new DeletedEntity($this, $data);
    }


    private $_deleted_article_object = null;

    // Canonical facade: $client->DeletedArticleObject()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deleted_article_object()
    // resolves here too.
    public function DeletedArticleObject($data = null)
    {
        require_once __DIR__ . '/entity/deleted_article_object_entity.php';
        if ($data === null) {
            if ($this->_deleted_article_object === null) {
                $this->_deleted_article_object = new DeletedArticleObjectEntity($this, null);
            }
            return $this->_deleted_article_object;
        }
        return new DeletedArticleObjectEntity($this, $data);
    }


    private $_deleted_company_object = null;

    // Canonical facade: $client->DeletedCompanyObject()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deleted_company_object()
    // resolves here too.
    public function DeletedCompanyObject($data = null)
    {
        require_once __DIR__ . '/entity/deleted_company_object_entity.php';
        if ($data === null) {
            if ($this->_deleted_company_object === null) {
                $this->_deleted_company_object = new DeletedCompanyObjectEntity($this, null);
            }
            return $this->_deleted_company_object;
        }
        return new DeletedCompanyObjectEntity($this, $data);
    }


    private $_deleted_data_connector_object = null;

    // Canonical facade: $client->DeletedDataConnectorObject()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deleted_data_connector_object()
    // resolves here too.
    public function DeletedDataConnectorObject($data = null)
    {
        require_once __DIR__ . '/entity/deleted_data_connector_object_entity.php';
        if ($data === null) {
            if ($this->_deleted_data_connector_object === null) {
                $this->_deleted_data_connector_object = new DeletedDataConnectorObjectEntity($this, null);
            }
            return $this->_deleted_data_connector_object;
        }
        return new DeletedDataConnectorObjectEntity($this, $data);
    }


    private $_deleted_internal_article_object = null;

    // Canonical facade: $client->DeletedInternalArticleObject()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deleted_internal_article_object()
    // resolves here too.
    public function DeletedInternalArticleObject($data = null)
    {
        require_once __DIR__ . '/entity/deleted_internal_article_object_entity.php';
        if ($data === null) {
            if ($this->_deleted_internal_article_object === null) {
                $this->_deleted_internal_article_object = new DeletedInternalArticleObjectEntity($this, null);
            }
            return $this->_deleted_internal_article_object;
        }
        return new DeletedInternalArticleObjectEntity($this, $data);
    }


    private $_deleted_object = null;

    // Canonical facade: $client->DeletedObject()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deleted_object()
    // resolves here too.
    public function DeletedObject($data = null)
    {
        require_once __DIR__ . '/entity/deleted_object_entity.php';
        if ($data === null) {
            if ($this->_deleted_object === null) {
                $this->_deleted_object = new DeletedObjectEntity($this, null);
            }
            return $this->_deleted_object;
        }
        return new DeletedObjectEntity($this, $data);
    }


    private $_email = null;

    // Canonical facade: $client->Email()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->email()
    // resolves here too.
    public function Email($data = null)
    {
        require_once __DIR__ . '/entity/email_entity.php';
        if ($data === null) {
            if ($this->_email === null) {
                $this->_email = new EmailEntity($this, null);
            }
            return $this->_email;
        }
        return new EmailEntity($this, $data);
    }


    private $_external_page = null;

    // Canonical facade: $client->ExternalPage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->external_page()
    // resolves here too.
    public function ExternalPage($data = null)
    {
        require_once __DIR__ . '/entity/external_page_entity.php';
        if ($data === null) {
            if ($this->_external_page === null) {
                $this->_external_page = new ExternalPageEntity($this, null);
            }
            return $this->_external_page;
        }
        return new ExternalPageEntity($this, $data);
    }


    private $_fin_agent = null;

    // Canonical facade: $client->FinAgent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->fin_agent()
    // resolves here too.
    public function FinAgent($data = null)
    {
        require_once __DIR__ . '/entity/fin_agent_entity.php';
        if ($data === null) {
            if ($this->_fin_agent === null) {
                $this->_fin_agent = new FinAgentEntity($this, null);
            }
            return $this->_fin_agent;
        }
        return new FinAgentEntity($this, $data);
    }


    private $_handling_event = null;

    // Canonical facade: $client->HandlingEvent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->handling_event()
    // resolves here too.
    public function HandlingEvent($data = null)
    {
        require_once __DIR__ . '/entity/handling_event_entity.php';
        if ($data === null) {
            if ($this->_handling_event === null) {
                $this->_handling_event = new HandlingEventEntity($this, null);
            }
            return $this->_handling_event;
        }
        return new HandlingEventEntity($this, $data);
    }


    private $_help_center = null;

    // Canonical facade: $client->HelpCenter()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->help_center()
    // resolves here too.
    public function HelpCenter($data = null)
    {
        require_once __DIR__ . '/entity/help_center_entity.php';
        if ($data === null) {
            if ($this->_help_center === null) {
                $this->_help_center = new HelpCenterEntity($this, null);
            }
            return $this->_help_center;
        }
        return new HelpCenterEntity($this, $data);
    }


    private $_internal_article = null;

    // Canonical facade: $client->InternalArticle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->internal_article()
    // resolves here too.
    public function InternalArticle($data = null)
    {
        require_once __DIR__ . '/entity/internal_article_entity.php';
        if ($data === null) {
            if ($this->_internal_article === null) {
                $this->_internal_article = new InternalArticleEntity($this, null);
            }
            return $this->_internal_article;
        }
        return new InternalArticleEntity($this, $data);
    }


    private $_internal_article_search = null;

    // Canonical facade: $client->InternalArticleSearch()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->internal_article_search()
    // resolves here too.
    public function InternalArticleSearch($data = null)
    {
        require_once __DIR__ . '/entity/internal_article_search_entity.php';
        if ($data === null) {
            if ($this->_internal_article_search === null) {
                $this->_internal_article_search = new InternalArticleSearchEntity($this, null);
            }
            return $this->_internal_article_search;
        }
        return new InternalArticleSearchEntity($this, $data);
    }


    private $_ip_allowlist = null;

    // Canonical facade: $client->IpAllowlist()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ip_allowlist()
    // resolves here too.
    public function IpAllowlist($data = null)
    {
        require_once __DIR__ . '/entity/ip_allowlist_entity.php';
        if ($data === null) {
            if ($this->_ip_allowlist === null) {
                $this->_ip_allowlist = new IpAllowlistEntity($this, null);
            }
            return $this->_ip_allowlist;
        }
        return new IpAllowlistEntity($this, $data);
    }


    private $_job = null;

    // Canonical facade: $client->Job()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->job()
    // resolves here too.
    public function Job($data = null)
    {
        require_once __DIR__ . '/entity/job_entity.php';
        if ($data === null) {
            if ($this->_job === null) {
                $this->_job = new JobEntity($this, null);
            }
            return $this->_job;
        }
        return new JobEntity($this, $data);
    }


    private $_macro = null;

    // Canonical facade: $client->Macro()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->macro()
    // resolves here too.
    public function Macro($data = null)
    {
        require_once __DIR__ . '/entity/macro_entity.php';
        if ($data === null) {
            if ($this->_macro === null) {
                $this->_macro = new MacroEntity($this, null);
            }
            return $this->_macro;
        }
        return new MacroEntity($this, $data);
    }


    private $_merge_history = null;

    // Canonical facade: $client->MergeHistory()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->merge_history()
    // resolves here too.
    public function MergeHistory($data = null)
    {
        require_once __DIR__ . '/entity/merge_history_entity.php';
        if ($data === null) {
            if ($this->_merge_history === null) {
                $this->_merge_history = new MergeHistoryEntity($this, null);
            }
            return $this->_merge_history;
        }
        return new MergeHistoryEntity($this, $data);
    }


    private $_message = null;

    // Canonical facade: $client->Message()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->message()
    // resolves here too.
    public function Message($data = null)
    {
        require_once __DIR__ . '/entity/message_entity.php';
        if ($data === null) {
            if ($this->_message === null) {
                $this->_message = new MessageEntity($this, null);
            }
            return $this->_message;
        }
        return new MessageEntity($this, $data);
    }


    private $_news_item = null;

    // Canonical facade: $client->NewsItem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->news_item()
    // resolves here too.
    public function NewsItem($data = null)
    {
        require_once __DIR__ . '/entity/news_item_entity.php';
        if ($data === null) {
            if ($this->_news_item === null) {
                $this->_news_item = new NewsItemEntity($this, null);
            }
            return $this->_news_item;
        }
        return new NewsItemEntity($this, $data);
    }


    private $_newsfeed = null;

    // Canonical facade: $client->Newsfeed()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->newsfeed()
    // resolves here too.
    public function Newsfeed($data = null)
    {
        require_once __DIR__ . '/entity/newsfeed_entity.php';
        if ($data === null) {
            if ($this->_newsfeed === null) {
                $this->_newsfeed = new NewsfeedEntity($this, null);
            }
            return $this->_newsfeed;
        }
        return new NewsfeedEntity($this, $data);
    }


    private $_note = null;

    // Canonical facade: $client->Note()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->note()
    // resolves here too.
    public function Note($data = null)
    {
        require_once __DIR__ . '/entity/note_entity.php';
        if ($data === null) {
            if ($this->_note === null) {
                $this->_note = new NoteEntity($this, null);
            }
            return $this->_note;
        }
        return new NoteEntity($this, $data);
    }


    private $_office_hour = null;

    // Canonical facade: $client->OfficeHour()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->office_hour()
    // resolves here too.
    public function OfficeHour($data = null)
    {
        require_once __DIR__ . '/entity/office_hour_entity.php';
        if ($data === null) {
            if ($this->_office_hour === null) {
                $this->_office_hour = new OfficeHourEntity($this, null);
            }
            return $this->_office_hour;
        }
        return new OfficeHourEntity($this, $data);
    }


    private $_office_hours_exception = null;

    // Canonical facade: $client->OfficeHoursException()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->office_hours_exception()
    // resolves here too.
    public function OfficeHoursException($data = null)
    {
        require_once __DIR__ . '/entity/office_hours_exception_entity.php';
        if ($data === null) {
            if ($this->_office_hours_exception === null) {
                $this->_office_hours_exception = new OfficeHoursExceptionEntity($this, null);
            }
            return $this->_office_hours_exception;
        }
        return new OfficeHoursExceptionEntity($this, $data);
    }


    private $_office_hours_schedule = null;

    // Canonical facade: $client->OfficeHoursSchedule()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->office_hours_schedule()
    // resolves here too.
    public function OfficeHoursSchedule($data = null)
    {
        require_once __DIR__ . '/entity/office_hours_schedule_entity.php';
        if ($data === null) {
            if ($this->_office_hours_schedule === null) {
                $this->_office_hours_schedule = new OfficeHoursScheduleEntity($this, null);
            }
            return $this->_office_hours_schedule;
        }
        return new OfficeHoursScheduleEntity($this, $data);
    }


    private $_paginated = null;

    // Canonical facade: $client->Paginated()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->paginated()
    // resolves here too.
    public function Paginated($data = null)
    {
        require_once __DIR__ . '/entity/paginated_entity.php';
        if ($data === null) {
            if ($this->_paginated === null) {
                $this->_paginated = new PaginatedEntity($this, null);
            }
            return $this->_paginated;
        }
        return new PaginatedEntity($this, $data);
    }


    private $_phone_switch = null;

    // Canonical facade: $client->PhoneSwitch()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->phone_switch()
    // resolves here too.
    public function PhoneSwitch($data = null)
    {
        require_once __DIR__ . '/entity/phone_switch_entity.php';
        if ($data === null) {
            if ($this->_phone_switch === null) {
                $this->_phone_switch = new PhoneSwitchEntity($this, null);
            }
            return $this->_phone_switch;
        }
        return new PhoneSwitchEntity($this, $data);
    }


    private $_reporting_data = null;

    // Canonical facade: $client->ReportingData()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->reporting_data()
    // resolves here too.
    public function ReportingData($data = null)
    {
        require_once __DIR__ . '/entity/reporting_data_entity.php';
        if ($data === null) {
            if ($this->_reporting_data === null) {
                $this->_reporting_data = new ReportingDataEntity($this, null);
            }
            return $this->_reporting_data;
        }
        return new ReportingDataEntity($this, $data);
    }


    private $_reporting_data_export = null;

    // Canonical facade: $client->ReportingDataExport()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->reporting_data_export()
    // resolves here too.
    public function ReportingDataExport($data = null)
    {
        require_once __DIR__ . '/entity/reporting_data_export_entity.php';
        if ($data === null) {
            if ($this->_reporting_data_export === null) {
                $this->_reporting_data_export = new ReportingDataExportEntity($this, null);
            }
            return $this->_reporting_data_export;
        }
        return new ReportingDataExportEntity($this, $data);
    }


    private $_segment = null;

    // Canonical facade: $client->Segment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->segment()
    // resolves here too.
    public function Segment($data = null)
    {
        require_once __DIR__ . '/entity/segment_entity.php';
        if ($data === null) {
            if ($this->_segment === null) {
                $this->_segment = new SegmentEntity($this, null);
            }
            return $this->_segment;
        }
        return new SegmentEntity($this, $data);
    }


    private $_side_conversation = null;

    // Canonical facade: $client->SideConversation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->side_conversation()
    // resolves here too.
    public function SideConversation($data = null)
    {
        require_once __DIR__ . '/entity/side_conversation_entity.php';
        if ($data === null) {
            if ($this->_side_conversation === null) {
                $this->_side_conversation = new SideConversationEntity($this, null);
            }
            return $this->_side_conversation;
        }
        return new SideConversationEntity($this, $data);
    }


    private $_subscription = null;

    // Canonical facade: $client->Subscription()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->subscription()
    // resolves here too.
    public function Subscription($data = null)
    {
        require_once __DIR__ . '/entity/subscription_entity.php';
        if ($data === null) {
            if ($this->_subscription === null) {
                $this->_subscription = new SubscriptionEntity($this, null);
            }
            return $this->_subscription;
        }
        return new SubscriptionEntity($this, $data);
    }


    private $_subscription_type = null;

    // Canonical facade: $client->SubscriptionType()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->subscription_type()
    // resolves here too.
    public function SubscriptionType($data = null)
    {
        require_once __DIR__ . '/entity/subscription_type_entity.php';
        if ($data === null) {
            if ($this->_subscription_type === null) {
                $this->_subscription_type = new SubscriptionTypeEntity($this, null);
            }
            return $this->_subscription_type;
        }
        return new SubscriptionTypeEntity($this, $data);
    }


    private $_tag = null;

    // Canonical facade: $client->Tag()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tag()
    // resolves here too.
    public function Tag($data = null)
    {
        require_once __DIR__ . '/entity/tag_entity.php';
        if ($data === null) {
            if ($this->_tag === null) {
                $this->_tag = new TagEntity($this, null);
            }
            return $this->_tag;
        }
        return new TagEntity($this, $data);
    }


    private $_team = null;

    // Canonical facade: $client->Team()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->team()
    // resolves here too.
    public function Team($data = null)
    {
        require_once __DIR__ . '/entity/team_entity.php';
        if ($data === null) {
            if ($this->_team === null) {
                $this->_team = new TeamEntity($this, null);
            }
            return $this->_team;
        }
        return new TeamEntity($this, $data);
    }


    private $_team_metric_list = null;

    // Canonical facade: $client->TeamMetricList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->team_metric_list()
    // resolves here too.
    public function TeamMetricList($data = null)
    {
        require_once __DIR__ . '/entity/team_metric_list_entity.php';
        if ($data === null) {
            if ($this->_team_metric_list === null) {
                $this->_team_metric_list = new TeamMetricListEntity($this, null);
            }
            return $this->_team_metric_list;
        }
        return new TeamMetricListEntity($this, $data);
    }


    private $_ticket = null;

    // Canonical facade: $client->Ticket()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ticket()
    // resolves here too.
    public function Ticket($data = null)
    {
        require_once __DIR__ . '/entity/ticket_entity.php';
        if ($data === null) {
            if ($this->_ticket === null) {
                $this->_ticket = new TicketEntity($this, null);
            }
            return $this->_ticket;
        }
        return new TicketEntity($this, $data);
    }


    private $_ticket_list = null;

    // Canonical facade: $client->TicketList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ticket_list()
    // resolves here too.
    public function TicketList($data = null)
    {
        require_once __DIR__ . '/entity/ticket_list_entity.php';
        if ($data === null) {
            if ($this->_ticket_list === null) {
                $this->_ticket_list = new TicketListEntity($this, null);
            }
            return $this->_ticket_list;
        }
        return new TicketListEntity($this, $data);
    }


    private $_ticket_reply = null;

    // Canonical facade: $client->TicketReply()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ticket_reply()
    // resolves here too.
    public function TicketReply($data = null)
    {
        require_once __DIR__ . '/entity/ticket_reply_entity.php';
        if ($data === null) {
            if ($this->_ticket_reply === null) {
                $this->_ticket_reply = new TicketReplyEntity($this, null);
            }
            return $this->_ticket_reply;
        }
        return new TicketReplyEntity($this, $data);
    }


    private $_ticket_state = null;

    // Canonical facade: $client->TicketState()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ticket_state()
    // resolves here too.
    public function TicketState($data = null)
    {
        require_once __DIR__ . '/entity/ticket_state_entity.php';
        if ($data === null) {
            if ($this->_ticket_state === null) {
                $this->_ticket_state = new TicketStateEntity($this, null);
            }
            return $this->_ticket_state;
        }
        return new TicketStateEntity($this, $data);
    }


    private $_ticket_type = null;

    // Canonical facade: $client->TicketType()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ticket_type()
    // resolves here too.
    public function TicketType($data = null)
    {
        require_once __DIR__ . '/entity/ticket_type_entity.php';
        if ($data === null) {
            if ($this->_ticket_type === null) {
                $this->_ticket_type = new TicketTypeEntity($this, null);
            }
            return $this->_ticket_type;
        }
        return new TicketTypeEntity($this, $data);
    }


    private $_ticket_type_attribute = null;

    // Canonical facade: $client->TicketTypeAttribute()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ticket_type_attribute()
    // resolves here too.
    public function TicketTypeAttribute($data = null)
    {
        require_once __DIR__ . '/entity/ticket_type_attribute_entity.php';
        if ($data === null) {
            if ($this->_ticket_type_attribute === null) {
                $this->_ticket_type_attribute = new TicketTypeAttributeEntity($this, null);
            }
            return $this->_ticket_type_attribute;
        }
        return new TicketTypeAttributeEntity($this, $data);
    }


    private $_visitor = null;

    // Canonical facade: $client->Visitor()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->visitor()
    // resolves here too.
    public function Visitor($data = null)
    {
        require_once __DIR__ . '/entity/visitor_entity.php';
        if ($data === null) {
            if ($this->_visitor === null) {
                $this->_visitor = new VisitorEntity($this, null);
            }
            return $this->_visitor;
        }
        return new VisitorEntity($this, $data);
    }


    private $_whatsapp_message_status = null;

    // Canonical facade: $client->WhatsappMessageStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->whatsapp_message_status()
    // resolves here too.
    public function WhatsappMessageStatus($data = null)
    {
        require_once __DIR__ . '/entity/whatsapp_message_status_entity.php';
        if ($data === null) {
            if ($this->_whatsapp_message_status === null) {
                $this->_whatsapp_message_status = new WhatsappMessageStatusEntity($this, null);
            }
            return $this->_whatsapp_message_status;
        }
        return new WhatsappMessageStatusEntity($this, $data);
    }


    private $_whatsapp_message_status_list = null;

    // Canonical facade: $client->WhatsappMessageStatusList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->whatsapp_message_status_list()
    // resolves here too.
    public function WhatsappMessageStatusList($data = null)
    {
        require_once __DIR__ . '/entity/whatsapp_message_status_list_entity.php';
        if ($data === null) {
            if ($this->_whatsapp_message_status_list === null) {
                $this->_whatsapp_message_status_list = new WhatsappMessageStatusListEntity($this, null);
            }
            return $this->_whatsapp_message_status_list;
        }
        return new WhatsappMessageStatusListEntity($this, $data);
    }


    private $_workflow = null;

    // Canonical facade: $client->Workflow()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workflow()
    // resolves here too.
    public function Workflow($data = null)
    {
        require_once __DIR__ . '/entity/workflow_entity.php';
        if ($data === null) {
            if ($this->_workflow === null) {
                $this->_workflow = new WorkflowEntity($this, null);
            }
            return $this->_workflow;
        }
        return new WorkflowEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new IntercomSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
