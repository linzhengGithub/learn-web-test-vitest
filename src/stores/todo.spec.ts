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

  it('remove todo', async () => {
    // 准备数据
    // 因为要调用2次接口,所以要使用mockImplementationOnce函数,对2个接口的入参和返回值进行编写
    vi.mocked(axios.post).mockImplementationOnce((path, { title }: any) => {
      return Promise.resolve({
        data: { data: { todo: { id: 1, title } } }
      })
    })
    vi.mocked(axios.post).mockImplementationOnce((path, { id }: any) => {
      return Promise.resolve({
        data: { data: { id } }
      })
    })
    setActivePinia(createPinia())
    const todoStore = useTodoStore()
    const title = '吃饭'
    const todo = await todoStore.addTodo(title)

    // 调用
    await todoStore.removeTodo(todo!.id)

    // 验证
    expect(todoStore.todos.length).toBe(0);
  })

  it('update todo', async () => {
    // 准备数据
    const todoList = [{ id: 1, title: '学习测试' }]
    vi.mocked(axios.get).mockResolvedValue({
      data: { data: { todoList } }
    })
    setActivePinia(createPinia())
    const todoStore = useTodoStore()

    // 调用
    await todoStore.updateTodos()

    // 验证
    expect(todoStore.todos[0].title).toBe('学习测试');
  })
})


