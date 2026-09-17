# OfficeHour entity test

import json
import os
import time

import pytest

from intercom_sdk.utility.voxgig_struct import voxgig_struct as vs
from intercom_sdk import IntercomSDK
from intercom_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestOfficeHourEntity:

    def test_should_create_instance(self):
        testsdk = IntercomSDK.test(None, None)
        ent = testsdk.OfficeHour(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "office_hour": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = IntercomSDK.test(seed, None)
        seen = list(base.OfficeHour(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from intercom_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = IntercomSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.OfficeHour(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _office_hour_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "office_hour." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set INTERCOM_TEST_OFFICE_HOUR_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        office_hour_ref01_ent = client.OfficeHour(None)
        office_hour_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.office_hour"), "office_hour_ref01"))
        office_hour_ref01_data["office_hours_schedule_id"] = setup["idmap"]["office_hours_schedule01"]

        office_hour_ref01_data = helpers.to_map(runner.entity_data(office_hour_ref01_ent.create(office_hour_ref01_data, None)))
        assert office_hour_ref01_data is not None
        assert office_hour_ref01_data["id"] is not None

        # LIST
        office_hour_ref01_match = {}

        office_hour_ref01_list_result = office_hour_ref01_ent.list(office_hour_ref01_match, None)
        assert isinstance(office_hour_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(office_hour_ref01_list_result),
            {"id": office_hour_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # REMOVE
        office_hour_ref01_match_rm0 = {
            "id": office_hour_ref01_data["id"],
        }
        office_hour_ref01_ent.remove(office_hour_ref01_match_rm0, None)

        # LIST
        office_hour_ref01_match_rt0 = {}

        office_hour_ref01_list_rt0_result = office_hour_ref01_ent.list(office_hour_ref01_match_rt0, None)
        assert isinstance(office_hour_ref01_list_rt0_result, list)

        not_found_item = vs.select(
            runner.entity_list_to_data(office_hour_ref01_list_rt0_result),
            {"id": office_hour_ref01_data["id"]})
        assert vs.isempty(not_found_item)



def _office_hour_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/office_hour/OfficeHourTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = IntercomSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["office_hour01", "office_hour02", "office_hour03", "office_hours_schedule01", "office_hours_schedule02", "office_hours_schedule03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "INTERCOM_TEST_OFFICE_HOUR_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "INTERCOM_TEST_OFFICE_HOUR_ENTID": idmap,
        "INTERCOM_TEST_LIVE": "FALSE",
        "INTERCOM_TEST_EXPLAIN": "FALSE",
        "INTERCOM_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("INTERCOM_TEST_OFFICE_HOUR_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("INTERCOM_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("INTERCOM_APIKEY"),
            },
            extra or {},
        ])
        client = IntercomSDK(helpers.to_map(merged_opts))

    _live = env.get("INTERCOM_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("INTERCOM_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
