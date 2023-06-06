import { it, expect, describe, afterEach } from 'vitest'
import { addTodo, clearTodos, todos } from './globalData'

// 属于隐式拆卸: 可以在单测报错时,使其不影响其他单测运行
afterEach(() => {
  clearTodos()
})
it('should be clear', () => {
  addTodo(1)
  expect(todos.length).toBe(1);
})

it('should be clear2', () => {
  addTodo('睡觉')
  expect(todos.length).toBe(1);
})
