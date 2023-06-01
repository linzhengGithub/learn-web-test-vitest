// 测试的基本策略-正向测试&反向测试&异常测试

import { createPinia, setActivePinia } from "pinia";
import { describe, expect, test, vi } from "vitest";
import { useTodoStore } from "../../stores/todo";
import { fetchRemoveTodo } from "../../api/todo_api";

describe('sad path', () => {
  // 反向测试
  test('input empty title', async () => {
    setActivePinia(createPinia())
    const todoStore = useTodoStore()
    const title = ''

    // 调用
    await todoStore.addTodo(title)

    // 验证
    expect(todoStore.todos.length).toBe(0);
  });
  // 异常测试
  test('remove todo return unusual data',async () => {
    vi.mocked(fetchRemoveTodo).mockImplementationOnce(() => {
      return Promise.resolve({
        data: null
      })
    })
    setActivePinia(createPinia())
    const todoStore = useTodoStore()
    const title = '吃饭'
    const todo = await todoStore.addTodo(title)

    // 验证
    expect(
      async () => {
        await todoStore.removeTodo(todo!.id)
      }
    ).toThrowError('')
  });
})
