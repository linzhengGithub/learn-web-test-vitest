// fake 仿造对象 (真实对象的简化版: 代替那些在测试环境中难以创建的 或者 过于复杂耗时间的 真实对象)
import io from 'socket.io-client';

type Listen = (message: string) => void
const listeners: Listen[] = []

export let socket
export function initSocket() {
  socket = io('http://localhost:3000')

  socket.on('message', (message) => {
    listeners.forEach(listener => {
      listener(message)
    })
  })

  return socket
}

export function addListener(listen: Listen) {
  listeners.push(listen)
}
