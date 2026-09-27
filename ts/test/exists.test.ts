
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { IntercomSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = IntercomSDK.test()
    equal(testsdk instanceof IntercomSDK, true,
      'IntercomSDK.test() must return a client synchronously')
  })

})
