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

func TestInternalArticleEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.InternalArticle(nil)
		if ent == nil {
			t.Fatal("expected non-nil InternalArticleEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := internal_articleBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "internal_article." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set INTERCOM_TEST_INTERNAL_ARTICLE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		internalArticleRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.internal_article")))
		var internalArticleRef01Data map[string]any
		if len(internalArticleRef01DataRaw) > 0 {
			internalArticleRef01Data = core.ToMapAny(internalArticleRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = internalArticleRef01Data

		// UPDATE
		internalArticleRef01Ent := client.InternalArticle(nil)
		internalArticleRef01DataUp0Up := map[string]any{
			"id": internalArticleRef01Data["id"],
		}

		internalArticleRef01MarkdefUp0Name := "body"
		internalArticleRef01MarkdefUp0Value := fmt.Sprintf("Mark01-internal_article_ref01_%d", setup.now)
		internalArticleRef01DataUp0Up[internalArticleRef01MarkdefUp0Name] = internalArticleRef01MarkdefUp0Value

		internalArticleRef01ResdataUp0Result, err := internalArticleRef01Ent.Update(internalArticleRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		internalArticleRef01ResdataUp0 := core.ToMapAny(entityData(internalArticleRef01ResdataUp0Result))
		if internalArticleRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if internalArticleRef01ResdataUp0["id"] != internalArticleRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if internalArticleRef01ResdataUp0[internalArticleRef01MarkdefUp0Name] != internalArticleRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", internalArticleRef01MarkdefUp0Name, internalArticleRef01ResdataUp0[internalArticleRef01MarkdefUp0Name])
		}

		// LOAD
		internalArticleRef01MatchDt0 := map[string]any{
			"id": internalArticleRef01Data["id"],
		}
		internalArticleRef01DataDt0Loaded, err := internalArticleRef01Ent.Load(internalArticleRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		internalArticleRef01DataDt0LoadResult := core.ToMapAny(entityData(internalArticleRef01DataDt0Loaded))
		if internalArticleRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if internalArticleRef01DataDt0LoadResult["id"] != internalArticleRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func internal_articleBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "internal_article", "InternalArticleTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read internal_article test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse internal_article test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"internal_article01", "internal_article02", "internal_article03"},
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
	entidEnvRaw := os.Getenv("INTERCOM_TEST_INTERNAL_ARTICLE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INTERCOM_TEST_INTERNAL_ARTICLE_ENTID": idmap,
		"INTERCOM_TEST_LIVE":      "FALSE",
		"INTERCOM_TEST_EXPLAIN":   "FALSE",
		"INTERCOM_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["INTERCOM_TEST_INTERNAL_ARTICLE_ENTID"])
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
