# TicketTypeAttribute entity test

import json
import os
import time

import pytest

from intercom_sdk.utility.voxgig_struct import voxgig_struct as vs
from intercom_sdk import IntercomSDK
from intercom_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestTicketTypeAttributeEntity:

    def test_should_create_instance(self):
        testsdk = IntercomSDK.test(None, None)
        ent = testsdk.TicketTypeAttribute(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _ticket_type_attribute_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "update"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "ticket_type_attribute." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set INTERCOM_TEST_TICKET_TYPE_ATTRIBUTE_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        ticket_type_attribute_ref01_ent = client.TicketTypeAttribute(None)
        ticket_type_attribute_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.ticket_type_attribute"), "ticket_type_attribute_ref01"))
        ticket_type_attribute_ref01_data["ticket_type_id"] = setup["idmap"]["ticket_type01"]

        ticket_type_attribute_ref01_data = helpers.to_map(runner.entity_data(ticket_type_attribute_ref01_ent.create(ticket_type_attribute_ref01_data, None)))
        assert ticket_type_attribute_ref01_data is not None
        assert ticket_type_attribute_ref01_data["id"] is not None

        # UPDATE
        ticket_type_attribute_ref01_data_up0_up = {
            "id": ticket_type_attribute_ref01_data["id"],
            "ticket_type_id": setup["idmap"]["ticket_type_id"],
        }

        ticket_type_attribute_ref01_markdef_up0_name = "data_type"
        ticket_type_attribute_ref01_markdef_up0_value = "Mark01-ticket_type_attribute_ref01_" + str(setup["now"])
        ticket_type_attribute_ref01_data_up0_up[ticket_type_attribute_ref01_markdef_up0_name] = ticket_type_attribute_ref01_markdef_up0_value

        ticket_type_attribute_ref01_resdata_up0 = helpers.to_map(runner.entity_data(ticket_type_attribute_ref01_ent.update(ticket_type_attribute_ref01_data_up0_up, None)))
        assert ticket_type_attribute_ref01_resdata_up0 is not None
        assert ticket_type_attribute_ref01_resdata_up0["id"] == ticket_type_attribute_ref01_data_up0_up["id"]
        assert ticket_type_attribute_ref01_resdata_up0[ticket_type_attribute_ref01_markdef_up0_name] == ticket_type_attribute_ref01_markdef_up0_value



def _ticket_type_attribute_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/ticket_type_attribute/TicketTypeAttributeTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = IntercomSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["ticket_type_attribute01", "ticket_type_attribute02", "ticket_type_attribute03", "ticket_type01", "ticket_type02", "ticket_type03"],
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
        "INTERCOM_TEST_TICKET_TYPE_ATTRIBUTE_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "INTERCOM_TEST_TICKET_TYPE_ATTRIBUTE_ENTID": idmap,
        "INTERCOM_TEST_LIVE": "FALSE",
        "INTERCOM_TEST_EXPLAIN": "FALSE",
        "INTERCOM_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("INTERCOM_TEST_TICKET_TYPE_ATTRIBUTE_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("ticket_type_id") is None:
        idmap_resolved["ticket_type_id"] = idmap_resolved.get("ticket_type01")

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
