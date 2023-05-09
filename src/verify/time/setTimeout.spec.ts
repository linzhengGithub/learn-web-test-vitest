import { it, expect, describe, vi } from 'vitest'
import { User } from './setTimeout'

describe('setTimeout test', () => {
  // v1,v2的区别在于灵活性,在函数传参delay的情况下,如果代码发生改变导致单测失败
  it('should fetch User data v1', () => {
    vi.useFakeTimers()
    const user = new User('1')

    const callback = vi.fn()
    user.fetchData(callback, 100)
    vi.advanceTimersByTime(100)

    expect(callback).toBeCalledWith('user id is 1');
  })
  it('should fetch User data v2', () => {
    vi.useFakeTimers()
    const user = new User('1')

    const callback = vi.fn()
    user.fetchDataV2(callback)
    vi.advanceTimersToNextTimer()

    expect(callback).toBeCalledWith('user id is 1');
  })
  it('multiple setTimeout', () => {
    vi.useFakeTimers()
    const user1 = new User('1')

    const callback1 = vi.fn()
    user1.fetchData(callback1, 100)
    const user2 = new User('1')
    const callback2 = vi.fn()

    user2.fetchDataV2(callback2)
    vi.runAllTimers()

    expect(callback1).toBeCalledWith('user id is 1');
    expect(callback2).toBeCalledWith('user id is 1');
  })


})
