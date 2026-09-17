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

func TestExternalPageEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ExternalPage(nil)
		if ent == nil {
			t.Fatal("expected non-nil ExternalPageEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"external_page": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.ExternalPage(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.ExternalPage(nil).Stream("list", nil, nil) {
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
		setup := external_pageBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "external_page." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set INTERCOM_TEST_EXTERNAL_PAGE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		externalPageRef01Ent := client.ExternalPage(nil)
		externalPageRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "external_page"}), "external_page_ref01"))

		externalPageRef01DataResult, err := externalPageRef01Ent.Create(externalPageRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		externalPageRef01Data = core.ToMapAny(entityData(externalPageRef01DataResult))
		if externalPageRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if externalPageRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		externalPageRef01Match := map[string]any{}

		externalPageRef01ListResult, err := externalPageRef01Ent.List(externalPageRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		externalPageRef01List, externalPageRef01ListOk := externalPageRef01ListResult.([]any)
		if !externalPageRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", externalPageRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(externalPageRef01List), map[string]any{"id": externalPageRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		externalPageRef01DataUp0Up := map[string]any{
			"id": externalPageRef01Data["id"],
		}

		externalPageRef01MarkdefUp0Name := "external_id"
		externalPageRef01MarkdefUp0Value := fmt.Sprintf("Mark01-external_page_ref01_%d", setup.now)
		externalPageRef01DataUp0Up[externalPageRef01MarkdefUp0Name] = externalPageRef01MarkdefUp0Value

		externalPageRef01ResdataUp0Result, err := externalPageRef01Ent.Update(externalPageRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		externalPageRef01ResdataUp0 := core.ToMapAny(entityData(externalPageRef01ResdataUp0Result))
		if externalPageRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if externalPageRef01ResdataUp0["id"] != externalPageRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if externalPageRef01ResdataUp0[externalPageRef01MarkdefUp0Name] != externalPageRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", externalPageRef01MarkdefUp0Name, externalPageRef01ResdataUp0[externalPageRef01MarkdefUp0Name])
		}

		// LOAD
		externalPageRef01MatchDt0 := map[string]any{
			"id": externalPageRef01Data["id"],
		}
		externalPageRef01DataDt0Loaded, err := externalPageRef01Ent.Load(externalPageRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		externalPageRef01DataDt0LoadResult := core.ToMapAny(entityData(externalPageRef01DataDt0Loaded))
		if externalPageRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if externalPageRef01DataDt0LoadResult["id"] != externalPageRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		externalPageRef01MatchRm0 := map[string]any{
			"id": externalPageRef01Data["id"],
		}
		_, err = externalPageRef01Ent.Remove(externalPageRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		externalPageRef01MatchRt0 := map[string]any{}

		externalPageRef01ListRt0Result, err := externalPageRef01Ent.List(externalPageRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		externalPageRef01ListRt0, externalPageRef01ListRt0Ok := externalPageRef01ListRt0Result.([]any)
		if !externalPageRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", externalPageRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(externalPageRef01ListRt0), map[string]any{"id": externalPageRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func external_pageBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "external_page", "ExternalPageTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read external_page test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse external_page test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"external_page01", "external_page02", "external_page03"},
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
	entidEnvRaw := os.Getenv("INTERCOM_TEST_EXTERNAL_PAGE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INTERCOM_TEST_EXTERNAL_PAGE_ENTID": idmap,
		"INTERCOM_TEST_LIVE":      "FALSE",
		"INTERCOM_TEST_EXPLAIN":   "FALSE",
		"INTERCOM_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["INTERCOM_TEST_EXTERNAL_PAGE_ENTID"])
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
