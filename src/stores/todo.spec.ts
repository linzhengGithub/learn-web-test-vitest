import axios from 'axios'
import { createPinia, setActivePinia } from 'pinia'
import { it, expect, describe, vi } from 'vitest'
import { useTodoStore } from './todo'

/** 多种API的测试方案 */

// 接口请求测试
vi.mock('axios')
describe('todo test group', () => {
  it('add todo', async () => {
    // 准备数据
    // 直接手写入参以及返回值,就不需要验证入参了
    vi.mocked(axios.post).mockImplementation((path, { title }: any) => {
      return Promise.resolve({
        data: { data: { todo: { id: 1, title } } }
      })
    })
    setActivePinia(createPinia())
    const todoStore = useTodoStore()
    const title = '吃饭'

    // 调用
    await todoStore.addTodo(title)

    // 验证
    expect(todoStore.todos[0].title).toBe(title);
  })
})
