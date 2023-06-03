import { it, expect, describe, vi } from 'vitest'
import { addListener, initSocket } from './fake'

class FakeSocket {
  private listeners: { [key: string]: ((...args: any[]) => void)[] } = {}

  // 模拟 on 方法, 用于监听事件
  on(event: string, listener: (...args: any[]) => void) {
    if (!this.listeners[event])
      this.listeners[event] = []
    this.listeners[event].push(listener)
  }

  // 用于在测试中手动触发事件, 模拟从服务器接受到消息
  trigger(event: string, ...args: []) {
    const eventListeners = this.listeners[event]
    if (eventListeners) {
      eventListeners.forEach(listener => listener(...args))
    }
  }
}

function io() {
  return new FakeSocket
}

vi.mock('socket.io-client', () => {
  return {
    default: io
  }
})
it('case fake', () => {
  const listen = vi.fn()

  const socket = initSocket()
  addListener(listen)

  socket.trigger('message', 'hi')
  expect(listen).toBeCalledWith('hi')
})
