package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/intercom-sdk/go"
	"github.com/voxgig-sdk/intercom-sdk/go/core"

	vs "github.com/voxgig-sdk/intercom-sdk/go/utility/struct"
)

func TestDataConnectorExecutionResultEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.DataConnectorExecutionResult(nil)
		if ent == nil {
			t.Fatal("expected non-nil DataConnectorExecutionResultEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := data_connector_execution_resultBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "data_connector_execution_result." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set INTERCOM_TEST_DATA_CONNECTOR_EXECUTION_RESULT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		dataConnectorExecutionResultRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.data_connector_execution_result")))
		var dataConnectorExecutionResultRef01Data map[string]any
		if len(dataConnectorExecutionResultRef01DataRaw) > 0 {
			dataConnectorExecutionResultRef01Data = core.ToMapAny(dataConnectorExecutionResultRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = dataConnectorExecutionResultRef01Data

		// LOAD
		dataConnectorExecutionResultRef01Ent := client.DataConnectorExecutionResult(nil)
		dataConnectorExecutionResultRef01MatchDt0 := map[string]any{
			"id": dataConnectorExecutionResultRef01Data["id"],
		}
		dataConnectorExecutionResultRef01DataDt0Loaded, err := dataConnectorExecutionResultRef01Ent.Load(dataConnectorExecutionResultRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		dataConnectorExecutionResultRef01DataDt0LoadResult := core.ToMapAny(entityData(dataConnectorExecutionResultRef01DataDt0Loaded))
		if dataConnectorExecutionResultRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if dataConnectorExecutionResultRef01DataDt0LoadResult["id"] != dataConnectorExecutionResultRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func data_connector_execution_resultBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "data_connector_execution_result", "DataConnectorExecutionResultTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read data_connector_execution_result test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse data_connector_execution_result test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"data_connector_execution_result01", "data_connector_execution_result02", "data_connector_execution_result03", "data_connector01", "data_connector02", "data_connector03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("INTERCOM_TEST_DATA_CONNECTOR_EXECUTION_RESULT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INTERCOM_TEST_DATA_CONNECTOR_EXECUTION_RESULT_ENTID": idmap,
		"INTERCOM_TEST_LIVE":      "FALSE",
		"INTERCOM_TEST_EXPLAIN":   "FALSE",
		"INTERCOM_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["INTERCOM_TEST_DATA_CONNECTOR_EXECUTION_RESULT_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["INTERCOM_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["INTERCOM_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewIntercomSDK(core.ToMapAny(mergedOpts))
	}

	live := env["INTERCOM_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["INTERCOM_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
