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

func TestTicketEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Ticket(nil)
		if ent == nil {
			t.Fatal("expected non-nil TicketEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := ticketBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "ticket." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set INTERCOM_TEST_TICKET_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		ticketRef01Ent := client.Ticket(nil)
		ticketRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "ticket"}), "ticket_ref01"))

		ticketRef01DataResult, err := ticketRef01Ent.Create(ticketRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		ticketRef01Data = core.ToMapAny(entityData(ticketRef01DataResult))
		if ticketRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if ticketRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		ticketRef01DataUp0Up := map[string]any{
			"id": ticketRef01Data["id"],
		}

		ticketRef01MarkdefUp0Name := "category"
		ticketRef01MarkdefUp0Value := fmt.Sprintf("Mark01-ticket_ref01_%d", setup.now)
		ticketRef01DataUp0Up[ticketRef01MarkdefUp0Name] = ticketRef01MarkdefUp0Value

		ticketRef01ResdataUp0Result, err := ticketRef01Ent.Update(ticketRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		ticketRef01ResdataUp0 := core.ToMapAny(entityData(ticketRef01ResdataUp0Result))
		if ticketRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if ticketRef01ResdataUp0["id"] != ticketRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if ticketRef01ResdataUp0[ticketRef01MarkdefUp0Name] != ticketRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", ticketRef01MarkdefUp0Name, ticketRef01ResdataUp0[ticketRef01MarkdefUp0Name])
		}

		// LOAD
		ticketRef01MatchDt0 := map[string]any{
			"id": ticketRef01Data["id"],
		}
		ticketRef01DataDt0Loaded, err := ticketRef01Ent.Load(ticketRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		ticketRef01DataDt0LoadResult := core.ToMapAny(entityData(ticketRef01DataDt0Loaded))
		if ticketRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if ticketRef01DataDt0LoadResult["id"] != ticketRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		ticketRef01MatchRm0 := map[string]any{
			"id": ticketRef01Data["id"],
		}
		_, err = ticketRef01Ent.Remove(ticketRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func ticketBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "ticket", "TicketTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read ticket test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse ticket test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"ticket01", "ticket02", "ticket03", "conversation01", "conversation02", "conversation03"},
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
	entidEnvRaw := os.Getenv("INTERCOM_TEST_TICKET_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INTERCOM_TEST_TICKET_ENTID": idmap,
		"INTERCOM_TEST_LIVE":      "FALSE",
		"INTERCOM_TEST_EXPLAIN":   "FALSE",
		"INTERCOM_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["INTERCOM_TEST_TICKET_ENTID"])
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
