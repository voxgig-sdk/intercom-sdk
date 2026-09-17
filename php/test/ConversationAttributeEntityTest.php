<?php
declare(strict_types=1);

// ConversationAttribute entity test

require_once __DIR__ . '/../intercom_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class ConversationAttributeEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = IntercomSDK::test(null, null);
        $ent = $testsdk->ConversationAttribute(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = conversation_attribute_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "update", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "conversation_attribute." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set INTERCOM_TEST_CONVERSATION_ATTRIBUTE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $conversation_attribute_ref01_ent = $client->ConversationAttribute(null);
        $conversation_attribute_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.conversation_attribute"), "conversation_attribute_ref01"));
        $conversation_attribute_ref01_data["attribute_id"] = $setup["idmap"]["attribute01"];

        $conversation_attribute_ref01_data_result = $conversation_attribute_ref01_ent->create($conversation_attribute_ref01_data, null);
        $conversation_attribute_ref01_data = Helpers::to_map(is_object($conversation_attribute_ref01_data_result) && method_exists($conversation_attribute_ref01_data_result, 'data_get') ? $conversation_attribute_ref01_data_result->data_get() : $conversation_attribute_ref01_data_result);
        $this->assertNotNull($conversation_attribute_ref01_data);
        $this->assertNotNull($conversation_attribute_ref01_data["id"]);

        // UPDATE
        $conversation_attribute_ref01_data_up0_up = [
            "id" => $conversation_attribute_ref01_data["id"],
        ];

        $conversation_attribute_ref01_markdef_up0_name = "admin_id";
        $conversation_attribute_ref01_markdef_up0_value = "Mark01-conversation_attribute_ref01_" . $setup["now"];
        $conversation_attribute_ref01_data_up0_up[$conversation_attribute_ref01_markdef_up0_name] = $conversation_attribute_ref01_markdef_up0_value;

        $conversation_attribute_ref01_resdata_up0_result = $conversation_attribute_ref01_ent->update($conversation_attribute_ref01_data_up0_up, null);
        $conversation_attribute_ref01_resdata_up0 = Helpers::to_map(is_object($conversation_attribute_ref01_resdata_up0_result) && method_exists($conversation_attribute_ref01_resdata_up0_result, 'data_get') ? $conversation_attribute_ref01_resdata_up0_result->data_get() : $conversation_attribute_ref01_resdata_up0_result);
        $this->assertNotNull($conversation_attribute_ref01_resdata_up0);
        $this->assertEquals($conversation_attribute_ref01_resdata_up0["id"], $conversation_attribute_ref01_data_up0_up["id"]);
        $this->assertEquals($conversation_attribute_ref01_resdata_up0[$conversation_attribute_ref01_markdef_up0_name], $conversation_attribute_ref01_markdef_up0_value);

        // LOAD
        $conversation_attribute_ref01_match_dt0 = [
            "id" => $conversation_attribute_ref01_data["id"],
        ];
        $conversation_attribute_ref01_data_dt0_loaded = $conversation_attribute_ref01_ent->load($conversation_attribute_ref01_match_dt0, null);
        $conversation_attribute_ref01_data_dt0_load_result = Helpers::to_map(is_object($conversation_attribute_ref01_data_dt0_loaded) && method_exists($conversation_attribute_ref01_data_dt0_loaded, 'data_get') ? $conversation_attribute_ref01_data_dt0_loaded->data_get() : $conversation_attribute_ref01_data_dt0_loaded);
        $this->assertNotNull($conversation_attribute_ref01_data_dt0_load_result);
        $this->assertEquals($conversation_attribute_ref01_data_dt0_load_result["id"], $conversation_attribute_ref01_data["id"]);

        // REMOVE
        $conversation_attribute_ref01_match_rm0 = [
            "id" => $conversation_attribute_ref01_data["id"],
        ];
        $conversation_attribute_ref01_ent->remove($conversation_attribute_ref01_match_rm0, null);

    }
}

function conversation_attribute_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/conversation_attribute/ConversationAttributeTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = IntercomSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["conversation_attribute01", "conversation_attribute02", "conversation_attribute03", "attribute01", "attribute02", "attribute03", "option01", "option02", "option03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("INTERCOM_TEST_CONVERSATION_ATTRIBUTE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "INTERCOM_TEST_CONVERSATION_ATTRIBUTE_ENTID" => $idmap,
        "INTERCOM_TEST_LIVE" => "FALSE",
        "INTERCOM_TEST_EXPLAIN" => "FALSE",
        "INTERCOM_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["INTERCOM_TEST_CONVERSATION_ATTRIBUTE_ENTID"]);
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
