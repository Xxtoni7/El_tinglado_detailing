import test from 'node:test'
import assert from 'node:assert/strict'
import { services } from './services.js'

test('the landing keeps five uniquely named services', () => {
  assert.equal(services.length, 5)
  assert.equal(new Set(services.map(({ name }) => name)).size, 5)
})
