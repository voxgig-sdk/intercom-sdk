

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { IntercomSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('ContactEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.Contact()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (maybeSkipControl(t, 'entityOp', 'contact.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set INTERCOM_TEST_CONTACT_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const contact_ref01_ent = client.Contact()
    let contact_ref01_data = setup.data.new.contact['contact_ref01']

    contact_ref01_data = (await contact_ref01_ent.create(contact_ref01_data)).data()
    assert(null != contact_ref01_data.id)


    // LIST
    const contact_ref01_match: any = {}

    const contact_ref01_list = (await contact_ref01_ent.list(contact_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(contact_ref01_list, { id: contact_ref01_data.id })))


    // UPDATE
    const contact_ref01_data_up0: any = {}
    contact_ref01_data_up0.id = contact_ref01_data.id

    const contact_ref01_markdef_up0 = { name: 'email', value: 'Mark01-contact_ref01_' + setup.now }
    ;(contact_ref01_data_up0 as any)[contact_ref01_markdef_up0.name] = contact_ref01_markdef_up0.value

    const contact_ref01_resdata_up0 = (await contact_ref01_ent.update(contact_ref01_data_up0)).data()
    assert(contact_ref01_resdata_up0.id === contact_ref01_data_up0.id)

    assert((contact_ref01_resdata_up0 as any)[contact_ref01_markdef_up0.name] === contact_ref01_markdef_up0.value)


    // LOAD
    const contact_ref01_match_dt0: any = {}
    contact_ref01_match_dt0.id = contact_ref01_data.id
    const contact_ref01_data_dt0 = (await contact_ref01_ent.load(contact_ref01_match_dt0)).data()
    assert(contact_ref01_data_dt0.id === contact_ref01_data.id)


    // REMOVE
    const contact_ref01_match_rm0: any = { id: contact_ref01_data.id }
    await contact_ref01_ent.remove(contact_ref01_match_rm0)
  

    // LIST
    const contact_ref01_match_rt0: any = {}

    const contact_ref01_list_rt0 = (await contact_ref01_ent.list(contact_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(contact_ref01_list_rt0, { id: contact_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/contact/ContactTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = IntercomSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['contact01','contact02','contact03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['INTERCOM_TEST_CONTACT_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'INTERCOM_TEST_CONTACT_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_CONTACT_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  if (live) {
    client = new IntercomSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.INTERCOM_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {}
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.INTERCOM_TEST_EXPLAIN,
    live,
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
