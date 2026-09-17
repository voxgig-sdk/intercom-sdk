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

func TestOfficeHourEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.OfficeHour(nil)
		if ent == nil {
			t.Fatal("expected non-nil OfficeHourEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"office_hour": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.OfficeHour(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.OfficeHour(nil).Stream("list", nil, nil) {
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
		setup := office_hourBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "office_hour." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set INTERCOM_TEST_OFFICE_HOUR_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		officeHourRef01Ent := client.OfficeHour(nil)
		officeHourRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "office_hour"}), "office_hour_ref01"))
		officeHourRef01Data["office_hours_schedule_id"] = setup.idmap["office_hours_schedule01"]

		officeHourRef01DataResult, err := officeHourRef01Ent.Create(officeHourRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		officeHourRef01Data = core.ToMapAny(entityData(officeHourRef01DataResult))
		if officeHourRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if officeHourRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		officeHourRef01Match := map[string]any{}

		officeHourRef01ListResult, err := officeHourRef01Ent.List(officeHourRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		officeHourRef01List, officeHourRef01ListOk := officeHourRef01ListResult.([]any)
		if !officeHourRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", officeHourRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(officeHourRef01List), map[string]any{"id": officeHourRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// REMOVE
		officeHourRef01MatchRm0 := map[string]any{
			"id": officeHourRef01Data["id"],
		}
		_, err = officeHourRef01Ent.Remove(officeHourRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		officeHourRef01MatchRt0 := map[string]any{}

		officeHourRef01ListRt0Result, err := officeHourRef01Ent.List(officeHourRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		officeHourRef01ListRt0, officeHourRef01ListRt0Ok := officeHourRef01ListRt0Result.([]any)
		if !officeHourRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", officeHourRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(officeHourRef01ListRt0), map[string]any{"id": officeHourRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func office_hourBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "office_hour", "OfficeHourTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read office_hour test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse office_hour test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"office_hour01", "office_hour02", "office_hour03", "office_hours_schedule01", "office_hours_schedule02", "office_hours_schedule03"},
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
	entidEnvRaw := os.Getenv("INTERCOM_TEST_OFFICE_HOUR_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INTERCOM_TEST_OFFICE_HOUR_ENTID": idmap,
		"INTERCOM_TEST_LIVE":      "FALSE",
		"INTERCOM_TEST_EXPLAIN":   "FALSE",
		"INTERCOM_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["INTERCOM_TEST_OFFICE_HOUR_ENTID"])
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
