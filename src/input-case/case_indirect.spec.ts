import { it, expect, describe, vi } from 'vitest'
import { doubleInnerHeight } from './index'

vi.mock('./indirectFn.ts', () => {
  return {
    innerHeightFn: () => 300
  }
})

it('indirect case', () => {
  const innerHeight = doubleInnerHeight()

  expect(innerHeight).toBe(600);
})
