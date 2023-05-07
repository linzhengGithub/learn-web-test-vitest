import { it, expect, describe, vi } from 'vitest'
import { generateRandomString } from './randmon'

// 不可预测性 -> 可预测性
describe('random', () => {
  it('Math.random should be return a fix value', () => {
    // 方式1
    vi.spyOn(Math, 'random').mockImplementation(() => 0.1)
    // 方式2
    // vi.spyOn(Math, 'random').mockImplementationOnce(() => 0.1) // 第一次调用返回的值
    // vi.spyOn(Math, 'random').mockImplementationOnce(() => 0.2) // 第二次调用返回的值
    const str = generateRandomString(2)

    expect(str).toBe('bb');

  })
})
