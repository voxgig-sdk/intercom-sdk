# Ticket entity test

import json
import os
import time

import pytest

from intercom_sdk.utility.voxgig_struct import voxgig_struct as vs
from intercom_sdk import IntercomSDK
from intercom_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestTicketEntity:

    def test_should_create_instance(self):
        testsdk = IntercomSDK.test(None, None)
        ent = testsdk.Ticket(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _ticket_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "update", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "ticket." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set INTERCOM_TEST_TICKET_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        ticket_ref01_ent = client.Ticket(None)
        ticket_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.ticket"), "ticket_ref01"))

        ticket_ref01_data = helpers.to_map(runner.entity_data(ticket_ref01_ent.create(ticket_ref01_data, None)))
        assert ticket_ref01_data is not None
        assert ticket_ref01_data["id"] is not None

        # UPDATE
        ticket_ref01_data_up0_up = {
            "id": ticket_ref01_data["id"],
        }

        ticket_ref01_markdef_up0_name = "category"
        ticket_ref01_markdef_up0_value = "Mark01-ticket_ref01_" + str(setup["now"])
        ticket_ref01_data_up0_up[ticket_ref01_markdef_up0_name] = ticket_ref01_markdef_up0_value

        ticket_ref01_resdata_up0 = helpers.to_map(runner.entity_data(ticket_ref01_ent.update(ticket_ref01_data_up0_up, None)))
        assert ticket_ref01_resdata_up0 is not None
        assert ticket_ref01_resdata_up0["id"] == ticket_ref01_data_up0_up["id"]
        assert ticket_ref01_resdata_up0[ticket_ref01_markdef_up0_name] == ticket_ref01_markdef_up0_value

        # LOAD
        ticket_ref01_match_dt0 = {
            "id": ticket_ref01_data["id"],
        }
        ticket_ref01_data_dt0_loaded = ticket_ref01_ent.load(ticket_ref01_match_dt0, None)
        ticket_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(ticket_ref01_data_dt0_loaded))
        assert ticket_ref01_data_dt0_load_result is not None
        assert ticket_ref01_data_dt0_load_result["id"] == ticket_ref01_data["id"]

        # REMOVE
        ticket_ref01_match_rm0 = {
            "id": ticket_ref01_data["id"],
        }
        ticket_ref01_ent.remove(ticket_ref01_match_rm0, None)



def _ticket_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/ticket/TicketTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = IntercomSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["ticket01", "ticket02", "ticket03", "conversation01", "conversation02", "conversation03"],
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
        "INTERCOM_TEST_TICKET_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "INTERCOM_TEST_TICKET_ENTID": idmap,
        "INTERCOM_TEST_LIVE": "FALSE",
        "INTERCOM_TEST_EXPLAIN": "FALSE",
        "INTERCOM_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("INTERCOM_TEST_TICKET_ENTID"))
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
