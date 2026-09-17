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

func TestTicketTypeAttributeEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.TicketTypeAttribute(nil)
		if ent == nil {
			t.Fatal("expected non-nil TicketTypeAttributeEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := ticket_type_attributeBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "ticket_type_attribute." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set INTERCOM_TEST_TICKET_TYPE_ATTRIBUTE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		ticketTypeAttributeRef01Ent := client.TicketTypeAttribute(nil)
		ticketTypeAttributeRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "ticket_type_attribute"}), "ticket_type_attribute_ref01"))
		ticketTypeAttributeRef01Data["ticket_type_id"] = setup.idmap["ticket_type01"]

		ticketTypeAttributeRef01DataResult, err := ticketTypeAttributeRef01Ent.Create(ticketTypeAttributeRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		ticketTypeAttributeRef01Data = core.ToMapAny(entityData(ticketTypeAttributeRef01DataResult))
		if ticketTypeAttributeRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if ticketTypeAttributeRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		ticketTypeAttributeRef01DataUp0Up := map[string]any{
			"id": ticketTypeAttributeRef01Data["id"],
			"ticket_type_id": setup.idmap["ticket_type_id"],
		}

		ticketTypeAttributeRef01MarkdefUp0Name := "data_type"
		ticketTypeAttributeRef01MarkdefUp0Value := fmt.Sprintf("Mark01-ticket_type_attribute_ref01_%d", setup.now)
		ticketTypeAttributeRef01DataUp0Up[ticketTypeAttributeRef01MarkdefUp0Name] = ticketTypeAttributeRef01MarkdefUp0Value

		ticketTypeAttributeRef01ResdataUp0Result, err := ticketTypeAttributeRef01Ent.Update(ticketTypeAttributeRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		ticketTypeAttributeRef01ResdataUp0 := core.ToMapAny(entityData(ticketTypeAttributeRef01ResdataUp0Result))
		if ticketTypeAttributeRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if ticketTypeAttributeRef01ResdataUp0["id"] != ticketTypeAttributeRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if ticketTypeAttributeRef01ResdataUp0[ticketTypeAttributeRef01MarkdefUp0Name] != ticketTypeAttributeRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", ticketTypeAttributeRef01MarkdefUp0Name, ticketTypeAttributeRef01ResdataUp0[ticketTypeAttributeRef01MarkdefUp0Name])
		}

	})
}

func ticket_type_attributeBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "ticket_type_attribute", "TicketTypeAttributeTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read ticket_type_attribute test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse ticket_type_attribute test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"ticket_type_attribute01", "ticket_type_attribute02", "ticket_type_attribute03", "ticket_type01", "ticket_type02", "ticket_type03"},
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
	entidEnvRaw := os.Getenv("INTERCOM_TEST_TICKET_TYPE_ATTRIBUTE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INTERCOM_TEST_TICKET_TYPE_ATTRIBUTE_ENTID": idmap,
		"INTERCOM_TEST_LIVE":      "FALSE",
		"INTERCOM_TEST_EXPLAIN":   "FALSE",
		"INTERCOM_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["INTERCOM_TEST_TICKET_TYPE_ATTRIBUTE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add ticket_type_id alias for update test.
	if idmapResolved["ticket_type_id"] == nil {
		idmapResolved["ticket_type_id"] = idmapResolved["ticket_type01"]
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
