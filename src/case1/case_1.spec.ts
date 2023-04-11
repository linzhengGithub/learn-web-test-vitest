import { it, expect, describe, vi } from 'vitest'
import { api_doubleUserAge } from './index';

// vitest - mock形式（全局）
vi.mock('./user.ts', () => {
  return {
    api_getUserAge: () => Promise.resolve(3)
  }
})
// api 异步获取
describe('api fetch间接input', () => {
  it('promise', async () => {
    const api_age = await api_doubleUserAge()
    expect(api_age).toBe(6)
  })
})
