import { createPinia, setActivePinia } from 'pinia'
import { it, expect, describe } from 'vitest'
import { useTodoStore } from './todo'
import { server } from '../mocks/server';
import { mockAddTodo, mockRemoveTodo, mockUpdateTodo } from '../mocks/handlers';

// setup msw -> 通过 vite.config.ts 中的配置 test 至 vitest.setup.ts

/** 多种API的测试方案 */
// mock service worker
describe('todo test group', () => {
  it('add todo', async () => {
    // 准备数据
    server.use(mockAddTodo())
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
    server.use(mockAddTodo(), mockRemoveTodo())
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
    server.use(mockUpdateTodo(todoList))
    setActivePinia(createPinia())
    const todoStore = useTodoStore()

    // 调用
    await todoStore.updateTodos()

    // 验证
    expect(todoStore.todos[0].title).toBe('学习测试');
  })
})


