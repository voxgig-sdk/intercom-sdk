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

func TestContentImportSourceEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ContentImportSource(nil)
		if ent == nil {
			t.Fatal("expected non-nil ContentImportSourceEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"content_import_source": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.ContentImportSource(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.ContentImportSource(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := content_import_sourceBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "content_import_source." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set INTERCOM_TEST_CONTENT_IMPORT_SOURCE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		contentImportSourceRef01Ent := client.ContentImportSource(nil)
		contentImportSourceRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "content_import_source"}), "content_import_source_ref01"))

		contentImportSourceRef01DataResult, err := contentImportSourceRef01Ent.Create(contentImportSourceRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		contentImportSourceRef01Data = core.ToMapAny(entityData(contentImportSourceRef01DataResult))
		if contentImportSourceRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if contentImportSourceRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		contentImportSourceRef01Match := map[string]any{}

		contentImportSourceRef01ListResult, err := contentImportSourceRef01Ent.List(contentImportSourceRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		contentImportSourceRef01List, contentImportSourceRef01ListOk := contentImportSourceRef01ListResult.([]any)
		if !contentImportSourceRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", contentImportSourceRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(contentImportSourceRef01List), map[string]any{"id": contentImportSourceRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		contentImportSourceRef01DataUp0Up := map[string]any{
			"id": contentImportSourceRef01Data["id"],
		}

		contentImportSourceRef01MarkdefUp0Name := "status"
		contentImportSourceRef01MarkdefUp0Value := fmt.Sprintf("Mark01-content_import_source_ref01_%d", setup.now)
		contentImportSourceRef01DataUp0Up[contentImportSourceRef01MarkdefUp0Name] = contentImportSourceRef01MarkdefUp0Value

		contentImportSourceRef01ResdataUp0Result, err := contentImportSourceRef01Ent.Update(contentImportSourceRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		contentImportSourceRef01ResdataUp0 := core.ToMapAny(entityData(contentImportSourceRef01ResdataUp0Result))
		if contentImportSourceRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if contentImportSourceRef01ResdataUp0["id"] != contentImportSourceRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if contentImportSourceRef01ResdataUp0[contentImportSourceRef01MarkdefUp0Name] != contentImportSourceRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", contentImportSourceRef01MarkdefUp0Name, contentImportSourceRef01ResdataUp0[contentImportSourceRef01MarkdefUp0Name])
		}

		// LOAD
		contentImportSourceRef01MatchDt0 := map[string]any{
			"id": contentImportSourceRef01Data["id"],
		}
		contentImportSourceRef01DataDt0Loaded, err := contentImportSourceRef01Ent.Load(contentImportSourceRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		contentImportSourceRef01DataDt0LoadResult := core.ToMapAny(entityData(contentImportSourceRef01DataDt0Loaded))
		if contentImportSourceRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if contentImportSourceRef01DataDt0LoadResult["id"] != contentImportSourceRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func content_import_sourceBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "content_import_source", "ContentImportSourceTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read content_import_source test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse content_import_source test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"content_import_source01", "content_import_source02", "content_import_source03"},
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
	entidEnvRaw := os.Getenv("INTERCOM_TEST_CONTENT_IMPORT_SOURCE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INTERCOM_TEST_CONTENT_IMPORT_SOURCE_ENTID": idmap,
		"INTERCOM_TEST_LIVE":      "FALSE",
		"INTERCOM_TEST_EXPLAIN":   "FALSE",
		"INTERCOM_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["INTERCOM_TEST_CONTENT_IMPORT_SOURCE_ENTID"])
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
