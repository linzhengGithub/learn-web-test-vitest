import { it, expect, describe, vi, afterEach } from 'vitest'
import { doubleInnerHeight, globalDoubleAge } from '.'

it('global case', () => {
  vi.stubGlobal('linz', { age: 18 })

  const age = globalDoubleAge()

  expect(age).toBe(36);

  // vi.unstubAllGlobals()
})

afterEach(() => {
  vi.unstubAllGlobals()
});

it('global case', () => {
  vi.stubGlobal('innerHeight', 200)

  const innerHeight = doubleInnerHeight()

  expect(innerHeight).toBe(400);

  // vi.unstubAllGlobals()
})
