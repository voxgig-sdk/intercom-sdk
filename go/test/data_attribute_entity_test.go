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

func TestDataAttributeEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.DataAttribute(nil)
		if ent == nil {
			t.Fatal("expected non-nil DataAttributeEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"data_attribute": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.DataAttribute(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.DataAttribute(nil).Stream("list", nil, nil) {
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
		setup := data_attributeBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "data_attribute." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set INTERCOM_TEST_DATA_ATTRIBUTE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		dataAttributeRef01Ent := client.DataAttribute(nil)
		dataAttributeRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "data_attribute"}), "data_attribute_ref01"))

		dataAttributeRef01DataResult, err := dataAttributeRef01Ent.Create(dataAttributeRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		dataAttributeRef01Data = core.ToMapAny(entityData(dataAttributeRef01DataResult))
		if dataAttributeRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if dataAttributeRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		dataAttributeRef01Match := map[string]any{}

		dataAttributeRef01ListResult, err := dataAttributeRef01Ent.List(dataAttributeRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		dataAttributeRef01List, dataAttributeRef01ListOk := dataAttributeRef01ListResult.([]any)
		if !dataAttributeRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", dataAttributeRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(dataAttributeRef01List), map[string]any{"id": dataAttributeRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		dataAttributeRef01DataUp0Up := map[string]any{
			"id": dataAttributeRef01Data["id"],
		}

		dataAttributeRef01MarkdefUp0Name := "admin_id"
		dataAttributeRef01MarkdefUp0Value := fmt.Sprintf("Mark01-data_attribute_ref01_%d", setup.now)
		dataAttributeRef01DataUp0Up[dataAttributeRef01MarkdefUp0Name] = dataAttributeRef01MarkdefUp0Value

		dataAttributeRef01ResdataUp0Result, err := dataAttributeRef01Ent.Update(dataAttributeRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		dataAttributeRef01ResdataUp0 := core.ToMapAny(entityData(dataAttributeRef01ResdataUp0Result))
		if dataAttributeRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if dataAttributeRef01ResdataUp0["id"] != dataAttributeRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if dataAttributeRef01ResdataUp0[dataAttributeRef01MarkdefUp0Name] != dataAttributeRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", dataAttributeRef01MarkdefUp0Name, dataAttributeRef01ResdataUp0[dataAttributeRef01MarkdefUp0Name])
		}

	})
}

func data_attributeBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "data_attribute", "DataAttributeTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read data_attribute test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse data_attribute test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"data_attribute01", "data_attribute02", "data_attribute03"},
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
	entidEnvRaw := os.Getenv("INTERCOM_TEST_DATA_ATTRIBUTE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INTERCOM_TEST_DATA_ATTRIBUTE_ENTID": idmap,
		"INTERCOM_TEST_LIVE":      "FALSE",
		"INTERCOM_TEST_EXPLAIN":   "FALSE",
		"INTERCOM_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["INTERCOM_TEST_DATA_ATTRIBUTE_ENTID"])
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
