# ConversationParticipant entity test

import json
import os
import time

import pytest

from intercom_sdk.utility.voxgig_struct import voxgig_struct as vs
from intercom_sdk import IntercomSDK
from intercom_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestConversationParticipantEntity:

    def test_should_create_instance(self):
        testsdk = IntercomSDK.test(None, None)
        ent = testsdk.ConversationParticipant(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _conversation_participant_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "conversation_participant." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set INTERCOM_TEST_CONVERSATION_PARTICIPANT_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        conversation_participant_ref01_ent = client.ConversationParticipant(None)
        conversation_participant_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.conversation_participant"), "conversation_participant_ref01"))
        conversation_participant_ref01_data["conversation_id"] = setup["idmap"]["conversation01"]

        conversation_participant_ref01_data = helpers.to_map(runner.entity_data(conversation_participant_ref01_ent.create(conversation_participant_ref01_data, None)))
        assert conversation_participant_ref01_data is not None
        assert conversation_participant_ref01_data["id"] is not None

        # REMOVE
        conversation_participant_ref01_match_rm0 = {
            "id": conversation_participant_ref01_data["id"],
        }
        conversation_participant_ref01_ent.remove(conversation_participant_ref01_match_rm0, None)



def _conversation_participant_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/conversation_participant/ConversationParticipantTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = IntercomSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["conversation_participant01", "conversation_participant02", "conversation_participant03", "conversation01", "conversation02", "conversation03", "customer01", "customer02", "customer03"],
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
        "INTERCOM_TEST_CONVERSATION_PARTICIPANT_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "INTERCOM_TEST_CONVERSATION_PARTICIPANT_ENTID": idmap,
        "INTERCOM_TEST_LIVE": "FALSE",
        "INTERCOM_TEST_EXPLAIN": "FALSE",
        "INTERCOM_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("INTERCOM_TEST_CONVERSATION_PARTICIPANT_ENTID"))
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
