import { it, expect, describe, vi } from 'vitest'
import { View, delay, fetchUserData } from './index';
import flushPromises  from 'flush-promises';

describe('promise', () => {
  it('normal', async () => {
    const result = await fetchUserData()

    expect(result).toBe('1');
  })

  it('delay', () => {
    vi.useFakeTimers()

    // delay 直接返回一个 promise 然后 使用快进的方法 快进掉里面的 setTimeout, 然后 验证时候使用 resolves.toBe 去验证
    const result = delay(100)

    vi.advanceTimersToNextTimer()

    expect(result).resolves.toBe('1');
  })

  it('layers promise', async () => {
    const view = new View()

    view.render()
    await flushPromises()

    expect(view.count).toBe(3);
  })
})
