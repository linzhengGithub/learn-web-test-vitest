import { test, run, it, expect, beforeAll, beforeEach, afterAll, afterEach, describe } from './core.js';

beforeAll(() => {
  console.log('before all');
})

beforeEach(() => {
  console.log('before each');
})

afterAll(() => {
  console.log('after all');
})

afterEach(() => {
  console.log('after each');
})

test('first test', () => {
  console.log('first test');
  expect(2).toBe(3)
})

// test.only('test only', () => {
//   console.log('test only')
// })

it('second test', () => {
  console.log('second test');
})

describe('sub:first test', () => {
  test('sub:first test', () => {
    console.log('sub:first test');
  })
})

run()
