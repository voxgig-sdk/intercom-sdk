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

func TestCustomObjectInstanceEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CustomObjectInstance(nil)
		if ent == nil {
			t.Fatal("expected non-nil CustomObjectInstanceEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := custom_object_instanceBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "custom_object_instance." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set INTERCOM_TEST_CUSTOM_OBJECT_INSTANCE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		customObjectInstanceRef01Ent := client.CustomObjectInstance(nil)
		customObjectInstanceRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "custom_object_instance"}), "custom_object_instance_ref01"))
		customObjectInstanceRef01Data["custom_object_type_identifier"] = setup.idmap["custom_object_typeentifier01"]

		customObjectInstanceRef01DataResult, err := customObjectInstanceRef01Ent.Create(customObjectInstanceRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		customObjectInstanceRef01Data = core.ToMapAny(entityData(customObjectInstanceRef01DataResult))
		if customObjectInstanceRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if customObjectInstanceRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LOAD
		customObjectInstanceRef01MatchDt0 := map[string]any{
			"id": customObjectInstanceRef01Data["id"],
		}
		customObjectInstanceRef01DataDt0Loaded, err := customObjectInstanceRef01Ent.Load(customObjectInstanceRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		customObjectInstanceRef01DataDt0LoadResult := core.ToMapAny(entityData(customObjectInstanceRef01DataDt0Loaded))
		if customObjectInstanceRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if customObjectInstanceRef01DataDt0LoadResult["id"] != customObjectInstanceRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		customObjectInstanceRef01MatchRm0 := map[string]any{
			"id": customObjectInstanceRef01Data["id"],
		}
		_, err = customObjectInstanceRef01Ent.Remove(customObjectInstanceRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func custom_object_instanceBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "custom_object_instance", "CustomObjectInstanceTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read custom_object_instance test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse custom_object_instance test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"custom_object_instance01", "custom_object_instance02", "custom_object_instance03", "custom_object_typeentifier01"},
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
	entidEnvRaw := os.Getenv("INTERCOM_TEST_CUSTOM_OBJECT_INSTANCE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INTERCOM_TEST_CUSTOM_OBJECT_INSTANCE_ENTID": idmap,
		"INTERCOM_TEST_LIVE":      "FALSE",
		"INTERCOM_TEST_EXPLAIN":   "FALSE",
		"INTERCOM_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["INTERCOM_TEST_CUSTOM_OBJECT_INSTANCE_ENTID"])
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
