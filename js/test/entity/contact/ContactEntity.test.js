
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')


const { IntercomSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('ContactEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.Contact()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
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
    const contact_ref01_match = {}

    const contact_ref01_list = (await contact_ref01_ent.list(contact_ref01_match)).map((e) => e.data())

    assert(!isempty(select(contact_ref01_list, { id: contact_ref01_data.id })))


    // UPDATE
    const contact_ref01_data_up0 = {}
    contact_ref01_data_up0.id = contact_ref01_data.id

    const contact_ref01_markdef_up0 = { name: 'email', value: 'Mark01-contact_ref01_' + setup.now }
    contact_ref01_data_up0 [contact_ref01_markdef_up0.name] = contact_ref01_markdef_up0.value

    const contact_ref01_resdata_up0 = (await contact_ref01_ent.update(contact_ref01_data_up0)).data()
    assert(contact_ref01_resdata_up0.id === contact_ref01_data_up0.id)

    assert(contact_ref01_resdata_up0[contact_ref01_markdef_up0.name] === contact_ref01_markdef_up0.value)


    // LOAD
    const contact_ref01_match_dt0 = {}
    contact_ref01_match_dt0.id = contact_ref01_data.id
    const contact_ref01_data_dt0 = (await contact_ref01_ent.load(contact_ref01_match_dt0)).data()
    assert(contact_ref01_data_dt0.id === contact_ref01_data.id)


    // REMOVE
    const contact_ref01_match_rm0 = {}
    contact_ref01_match_rm0.id = contact_ref01_data.id
    await contact_ref01_ent.remove(contact_ref01_match_rm0)
  

    // LIST
    const contact_ref01_match_rt0 = {}

    const contact_ref01_list_rt0 = (await contact_ref01_ent.list(contact_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(contact_ref01_list_rt0, { id: contact_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

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

  const env = envOverride({
    'INTERCOM_TEST_CONTACT_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_CONTACT_ENTID']

  if ('TRUE' === env.INTERCOM_TEST_LIVE) {
    client = new IntercomSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.INTERCOM_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
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
    now: Date.now(),
  }

  return setup
}
  
