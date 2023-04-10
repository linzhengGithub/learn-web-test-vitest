import { test, it, expect, describe, beforeEach, beforeAll, afterAll, afterEach } from 'vitest'

beforeAll(() => {
  console.log('before all');
});

beforeEach(() => {
  console.log('before each');
});

it('it case', () => {
  console.log('it case');
  expect(1).toBe(1)
  expect({ name: 'lin' }).toEqual({ name: 'lin' })
})

test('test case', () => {
  console.log('test case');
})

describe('describe case', () => {
  test('sub: test case', () => {
    console.log('sub: test case');
  })
})

afterEach(() => {
  console.log('after each');
});

afterAll(() => {
  console.log('after all')
});



