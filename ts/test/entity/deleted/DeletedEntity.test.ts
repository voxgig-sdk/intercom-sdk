

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('DeletedEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.Deleted()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'deleted.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"deleted_at":{"a":true,"fo":"date-time","h":"Deleted At","n":"deleted_at","r":false,"sh":"The time when the conversation was deleted.","t":"`$INTEGER`","key$":"deleted_at","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The ID of the deleted conversation.","t":"`$STRING`","key$":"id","index$":1},"metrics_retained":{"a":true,"h":"Metrics Retained","n":"metrics_retained","r":false,"sh":"Whether reporting metrics are retained for this conversation ID","t":"`$BOOLEAN`","key$":"metrics_retained","index$":2},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"String representing the object's type.","t":"`$STRING`","key$":"type","index$":3}},"id":{"field":"id","name":"id"},"name":"deleted","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /conversations/deleted","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"desc","k":"query","n":"order","or":"order","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/conversations/deleted","q":{"exist":["intercom_version","order","page","per_page"]},"r":{},"s":[{"lit":"conversations"},{"lit":"deleted"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"deleted","name__orig":"deleted","Name":"Deleted","name_":"deleted","name-":"deleted","NAME":"DELETED","index$":44}, {"active":true,"entity":"deleted","key$":"BasicDeletedFlow","kind":"basic","name":"BasicDeletedFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"deleted_ref01"}}],"index$":0}]}, 'Deleted', {"GET /conversations/deleted":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"page","in":"query","required":false,"description":"The page of results to fetch. Defaults to first page","example":1,"schema":{"type":"integer"},"index$":1},{"name":"per_page","in":"query","required":false,"description":"How many results per page","schema":{"type":"integer","default":20,"maximum":60},"index$":2},{"name":"order","in":"query","required":false,"description":"`asc` or `desc`. Returns the conversation IDs in ascending or descending order. Defaults to desc","example":"desc","schema":{"type":"string"},"index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let deleted_ref01_data = Object.values(setup.data.existing.deleted)[0] as any

    // LIST
    const deleted_ref01_ent = client.Deleted()
    const deleted_ref01_match: any = {}

    const deleted_ref01_list = (await deleted_ref01_ent.list(deleted_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/deleted/DeletedTestData.json')

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
    ['deleted01','deleted02','deleted03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_DELETED_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_DELETED_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_DELETED_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
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
      extra || {},
      { system: { fetch: transport.fetch } }
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
    transport,
    now: Date.now(),
  }

  return setup
}
  
