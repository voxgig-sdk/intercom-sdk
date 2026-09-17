<?php
declare(strict_types=1);

// HelpCenter entity test

require_once __DIR__ . '/../intercom_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class HelpCenterEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = IntercomSDK::test(null, null);
        $ent = $testsdk->HelpCenter(null);
        $this->assertNotNull($ent);
    }

    // Feature #4: the entity stream(action, ...) method runs the op pipeline
    // and yields result items. With the streaming feature active it yields the
    // feature's incremental output; otherwise it falls back to the materialised
    // list so stream always yields.
    public function test_stream(): void
    {
        $seed = [
            "entity" => [
                "help_center" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = IntercomSDK::test($seed, null);
        $seen = iterator_to_array($base->HelpCenter(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = IntercomConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = IntercomSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->HelpCenter(null)->stream("list", null, null) as $item) {
                if (is_array($item) && array_is_list($item)) {
                    foreach ($item as $sub) {
                        $got[] = $sub;
                    }
                } else {
                    $got[] = $item;
                }
            }
            $this->assertCount(3, $got);
        }
    }

    public function test_basic_flow(): void
    {
        $setup = help_center_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "update", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "help_center." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set INTERCOM_TEST_HELP_CENTER_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $help_center_ref01_ent = $client->HelpCenter(null);
        $help_center_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.help_center"), "help_center_ref01"));

        $help_center_ref01_data_result = $help_center_ref01_ent->create($help_center_ref01_data, null);
        $help_center_ref01_data = Helpers::to_map(is_object($help_center_ref01_data_result) && method_exists($help_center_ref01_data_result, 'data_get') ? $help_center_ref01_data_result->data_get() : $help_center_ref01_data_result);
        $this->assertNotNull($help_center_ref01_data);
        $this->assertNotNull($help_center_ref01_data["id"]);

        // LIST
        $help_center_ref01_match = [];

        $help_center_ref01_list_result = $help_center_ref01_ent->list($help_center_ref01_match, null);
        $this->assertIsArray($help_center_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($help_center_ref01_list_result),
            ["id" => $help_center_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // UPDATE
        $help_center_ref01_data_up0_up = [
            "id" => $help_center_ref01_data["id"],
        ];

        $help_center_ref01_markdef_up0_name = "custom_domain";
        $help_center_ref01_markdef_up0_value = "Mark01-help_center_ref01_" . $setup["now"];
        $help_center_ref01_data_up0_up[$help_center_ref01_markdef_up0_name] = $help_center_ref01_markdef_up0_value;

        $help_center_ref01_resdata_up0_result = $help_center_ref01_ent->update($help_center_ref01_data_up0_up, null);
        $help_center_ref01_resdata_up0 = Helpers::to_map(is_object($help_center_ref01_resdata_up0_result) && method_exists($help_center_ref01_resdata_up0_result, 'data_get') ? $help_center_ref01_resdata_up0_result->data_get() : $help_center_ref01_resdata_up0_result);
        $this->assertNotNull($help_center_ref01_resdata_up0);
        $this->assertEquals($help_center_ref01_resdata_up0["id"], $help_center_ref01_data_up0_up["id"]);
        $this->assertEquals($help_center_ref01_resdata_up0[$help_center_ref01_markdef_up0_name], $help_center_ref01_markdef_up0_value);

        // LOAD
        $help_center_ref01_match_dt0 = [
            "id" => $help_center_ref01_data["id"],
        ];
        $help_center_ref01_data_dt0_loaded = $help_center_ref01_ent->load($help_center_ref01_match_dt0, null);
        $help_center_ref01_data_dt0_load_result = Helpers::to_map(is_object($help_center_ref01_data_dt0_loaded) && method_exists($help_center_ref01_data_dt0_loaded, 'data_get') ? $help_center_ref01_data_dt0_loaded->data_get() : $help_center_ref01_data_dt0_loaded);
        $this->assertNotNull($help_center_ref01_data_dt0_load_result);
        $this->assertEquals($help_center_ref01_data_dt0_load_result["id"], $help_center_ref01_data["id"]);

        // REMOVE
        $help_center_ref01_match_rm0 = [
            "id" => $help_center_ref01_data["id"],
        ];
        $help_center_ref01_ent->remove($help_center_ref01_match_rm0, null);

        // LIST
        $help_center_ref01_match_rt0 = [];

        $help_center_ref01_list_rt0_result = $help_center_ref01_ent->list($help_center_ref01_match_rt0, null);
        $this->assertIsArray($help_center_ref01_list_rt0_result);

        $not_found_item = sdk_select(
            Runner::entity_list_to_data($help_center_ref01_list_rt0_result),
            ["id" => $help_center_ref01_data["id"]]);
        $this->assertEmpty($not_found_item);

    }
}

function help_center_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/help_center/HelpCenterTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = IntercomSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["help_center01", "help_center02", "help_center03", "collection01", "collection02", "collection03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("INTERCOM_TEST_HELP_CENTER_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "INTERCOM_TEST_HELP_CENTER_ENTID" => $idmap,
        "INTERCOM_TEST_LIVE" => "FALSE",
        "INTERCOM_TEST_EXPLAIN" => "FALSE",
        "INTERCOM_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["INTERCOM_TEST_HELP_CENTER_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["INTERCOM_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["INTERCOM_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new IntercomSDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["INTERCOM_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["INTERCOM_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
