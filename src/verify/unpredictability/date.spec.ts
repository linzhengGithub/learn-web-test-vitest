import { it, expect, describe, vi, beforeEach, afterEach } from 'vitest'
import { checkFriday } from './date'

// 不可预测性 -> 可预测性
describe('date', () => {
  beforeEach(() => {
    // 使用假的时间
    vi.useFakeTimers()
  });
  afterEach(() => {
    // 使用真的时间
    vi.useRealTimers()
  });
  it('should be today is friday ', () => {
    // 因为月份是从0开始计算 4 = 5月
    // 设置假的系统时间
    vi.setSystemTime(new Date(2023, 4, 5))

    const result = checkFriday()

    expect(result).toBe('happy');
  })
  it('should be today not is friday ', () => {
    // 因为月份是从0开始计算 4 = 5月
    vi.setSystemTime(new Date(2023, 4, 6))

    const result = checkFriday()

    expect(result).toBe('sad');
  })
  it('case', () => {
    checkFriday()
  })
})
