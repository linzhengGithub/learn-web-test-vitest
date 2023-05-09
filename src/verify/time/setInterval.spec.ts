import { it, expect, describe, vi } from 'vitest'
import { sayHi, sayHiV2 } from './setInterval'

describe('setInterval', () => {
  it('should call one', () => {
    vi.useFakeTimers()
    vi.spyOn(console, 'log')

    sayHi()
    // 方式1 - 快进调一个setTimeout / setInterval
    vi.advanceTimersToNextTimer()
    // 方式2 - 把时间快进
    // vi.advanceTimersByTime(100)

    // 这种方式在setInterval并不适用,因为它是一个一直执行的函数
    // vi.runAllTimers()

    expect(console.log).toBeCalledWith('hi');
  })
  it.only('should call one', () => {
    vi.useFakeTimers()
    vi.spyOn(console, 'log')

    sayHiV2()
    // 方式1 - 有多少个time就写多少个
    // vi.advanceTimersToNextTimer()
    // vi.advanceTimersToNextTimer()

    // 方式2 - 累计总时间进行快进
    vi.advanceTimersByTime(1100)

    expect(console.log).toBeCalledWith('hi');
  })
})
