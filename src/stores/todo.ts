import { defineStore } from 'pinia';
import { fetchAddTodo } from '../api/todo_api';

interface TodoState{
  todos: Todo[]
}

interface Todo{
  id: number,
  title: string
}

export const useTodoStore = defineStore({
  id: 'todo_list_store',
  state: ():TodoState => ({
    todos: []
  }),
  getters: {},
  actions: {
    createTodoItem(id, title) {
      return { id, title }
    },
    async addTodo(title: string) {
      const { data } = await fetchAddTodo(title)
      const todo = this.createTodoItem(data.todo.id, data.todo.title)
      this.todos.push(todo)
      return todo
    },
    removeTodo() { }
  }
})
