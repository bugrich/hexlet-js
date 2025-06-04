import { strict as assert } from 'node:assert'
import set from '../src/set.js'

const obj = {}

assert.deepEqual(set(obj, 'key1', 'value1'), (obj.key1 = 'value1'))
