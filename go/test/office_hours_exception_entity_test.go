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

func TestOfficeHoursExceptionEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.OfficeHoursException(nil)
		if ent == nil {
			t.Fatal("expected non-nil OfficeHoursExceptionEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"office_hours_exception": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.OfficeHoursException(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.OfficeHoursException(nil).Stream("list", nil, nil) {
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
		setup := office_hours_exceptionBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "office_hours_exception." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set INTERCOM_TEST_OFFICE_HOURS_EXCEPTION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		officeHoursExceptionRef01Ent := client.OfficeHoursException(nil)
		officeHoursExceptionRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "office_hours_exception"}), "office_hours_exception_ref01"))
		officeHoursExceptionRef01Data["office_hours_schedule_id"] = setup.idmap["office_hours_schedule01"]

		officeHoursExceptionRef01DataResult, err := officeHoursExceptionRef01Ent.Create(officeHoursExceptionRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		officeHoursExceptionRef01Data = core.ToMapAny(entityData(officeHoursExceptionRef01DataResult))
		if officeHoursExceptionRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if officeHoursExceptionRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		officeHoursExceptionRef01Match := map[string]any{
			"office_hours_schedule_id": setup.idmap["office_hours_schedule01"],
		}

		officeHoursExceptionRef01ListResult, err := officeHoursExceptionRef01Ent.List(officeHoursExceptionRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		officeHoursExceptionRef01List, officeHoursExceptionRef01ListOk := officeHoursExceptionRef01ListResult.([]any)
		if !officeHoursExceptionRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", officeHoursExceptionRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(officeHoursExceptionRef01List), map[string]any{"id": officeHoursExceptionRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		officeHoursExceptionRef01DataUp0Up := map[string]any{
			"id": officeHoursExceptionRef01Data["id"],
			"office_hours_schedule_id": setup.idmap["office_hours_schedule_id"],
		}

		officeHoursExceptionRef01MarkdefUp0Name := "exception_date"
		officeHoursExceptionRef01MarkdefUp0Value := fmt.Sprintf("Mark01-office_hours_exception_ref01_%d", setup.now)
		officeHoursExceptionRef01DataUp0Up[officeHoursExceptionRef01MarkdefUp0Name] = officeHoursExceptionRef01MarkdefUp0Value

		officeHoursExceptionRef01ResdataUp0Result, err := officeHoursExceptionRef01Ent.Update(officeHoursExceptionRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		officeHoursExceptionRef01ResdataUp0 := core.ToMapAny(entityData(officeHoursExceptionRef01ResdataUp0Result))
		if officeHoursExceptionRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if officeHoursExceptionRef01ResdataUp0["id"] != officeHoursExceptionRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if officeHoursExceptionRef01ResdataUp0[officeHoursExceptionRef01MarkdefUp0Name] != officeHoursExceptionRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", officeHoursExceptionRef01MarkdefUp0Name, officeHoursExceptionRef01ResdataUp0[officeHoursExceptionRef01MarkdefUp0Name])
		}

		// LOAD
		officeHoursExceptionRef01MatchDt0 := map[string]any{
			"id": officeHoursExceptionRef01Data["id"],
		}
		officeHoursExceptionRef01DataDt0Loaded, err := officeHoursExceptionRef01Ent.Load(officeHoursExceptionRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		officeHoursExceptionRef01DataDt0LoadResult := core.ToMapAny(entityData(officeHoursExceptionRef01DataDt0Loaded))
		if officeHoursExceptionRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if officeHoursExceptionRef01DataDt0LoadResult["id"] != officeHoursExceptionRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func office_hours_exceptionBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "office_hours_exception", "OfficeHoursExceptionTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read office_hours_exception test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse office_hours_exception test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"office_hours_exception01", "office_hours_exception02", "office_hours_exception03", "office_hours_schedule01", "office_hours_schedule02", "office_hours_schedule03"},
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
	entidEnvRaw := os.Getenv("INTERCOM_TEST_OFFICE_HOURS_EXCEPTION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INTERCOM_TEST_OFFICE_HOURS_EXCEPTION_ENTID": idmap,
		"INTERCOM_TEST_LIVE":      "FALSE",
		"INTERCOM_TEST_EXPLAIN":   "FALSE",
		"INTERCOM_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["INTERCOM_TEST_OFFICE_HOURS_EXCEPTION_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add office_hours_schedule_id alias for update test.
	if idmapResolved["office_hours_schedule_id"] == nil {
		idmapResolved["office_hours_schedule_id"] = idmapResolved["office_hours_schedule01"]
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
