import { defineStore } from 'pinia';
import { fetchAddTodo, fetchRemoveTodo, fetchTodoList } from '../api/todo_api';
import { ref } from 'vue';

interface Todo {
  id: number,
  title: string
}

export const useTodoStore = defineStore('todo_list_store', () => {
  const todos = ref<Todo[]>([])

  const createTodoItem = (id: number, title: string) => {
    return { id, title }
  }

  const addTodo = async (title: string) => {
    if (!title) return null
    const { data } = await fetchAddTodo(title)
    const todo = createTodoItem(data.todo.id, data.todo.title)
    todos.value.push(todo)
    return todo
  }

  const removeTodo = async (id: number) => {
    const { data } = await fetchRemoveTodo(id)
    if (!data) {
      throw new Error('')
    }
    const todoItem = findTodo(data.id)
    if (todoItem) {
      todos.value = todos.value.filter(item => item.id !== todoItem.id)
    }
    return todoItem
  }

  const updateTodos = async () => {
    const { data } = await fetchTodoList()
    todos.value = data.todoList
  }

  function findTodo(id: number) {
    return todos.value.filter(item => item.id === id)[0]
  }
  return {
    todos,
    addTodo,
    removeTodo,
    updateTodos
  }
})

