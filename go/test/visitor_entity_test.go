package sdktest

import (
	"encoding/json"
	"fmt"
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

func TestVisitorEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Visitor(nil)
		if ent == nil {
			t.Fatal("expected non-nil VisitorEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := visitorBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "visitor." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set INTERCOM_TEST_VISITOR_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		visitorRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.visitor")))
		var visitorRef01Data map[string]any
		if len(visitorRef01DataRaw) > 0 {
			visitorRef01Data = core.ToMapAny(visitorRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = visitorRef01Data

		// UPDATE
		visitorRef01Ent := client.Visitor(nil)
		visitorRef01DataUp0Up := map[string]any{
			"id": visitorRef01Data["id"],
		}

		visitorRef01MarkdefUp0Name := "app_id"
		visitorRef01MarkdefUp0Value := fmt.Sprintf("Mark01-visitor_ref01_%d", setup.now)
		visitorRef01DataUp0Up[visitorRef01MarkdefUp0Name] = visitorRef01MarkdefUp0Value

		visitorRef01ResdataUp0Result, err := visitorRef01Ent.Update(visitorRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		visitorRef01ResdataUp0 := core.ToMapAny(entityData(visitorRef01ResdataUp0Result))
		if visitorRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if visitorRef01ResdataUp0["id"] != visitorRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if visitorRef01ResdataUp0[visitorRef01MarkdefUp0Name] != visitorRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", visitorRef01MarkdefUp0Name, visitorRef01ResdataUp0[visitorRef01MarkdefUp0Name])
		}

		// LOAD
		visitorRef01MatchDt0 := map[string]any{
			"id": visitorRef01Data["id"],
		}
		visitorRef01DataDt0Loaded, err := visitorRef01Ent.Load(visitorRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		visitorRef01DataDt0LoadResult := core.ToMapAny(entityData(visitorRef01DataDt0Loaded))
		if visitorRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if visitorRef01DataDt0LoadResult["id"] != visitorRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func visitorBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "visitor", "VisitorTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read visitor test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse visitor test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"visitor01", "visitor02", "visitor03"},
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
	entidEnvRaw := os.Getenv("INTERCOM_TEST_VISITOR_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INTERCOM_TEST_VISITOR_ENTID": idmap,
		"INTERCOM_TEST_LIVE":      "FALSE",
		"INTERCOM_TEST_EXPLAIN":   "FALSE",
		"INTERCOM_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["INTERCOM_TEST_VISITOR_ENTID"])
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
