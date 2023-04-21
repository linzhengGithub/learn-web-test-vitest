import { it, expect, describe, beforeEach } from 'vitest'
import { counterClass } from './countClass'
import { getCount, increment, restCount } from './countFn'

describe('test count class', () => {
  // 0 -> 1
  it('case class', () => {
    const count = new counterClass()

    count.increment()

    expect(count.getCountValue()).toBe(1);
  })
})

describe('test count fn', () => {
  beforeEach(() => {
    restCount()
  });
  // 0 -> 1
  it('case fn', () => {
    increment()

    const count = getCount()

    expect(count).toBe(1);
  })
})
