interface Todo {
  title: string
}
export const todos: Todo[] = []

export function addTodo(title: any) {
  todos.push({ title })
  if (typeof title !== 'string') throw new Error('')
}

export function clearTodos() {
  todos.length = 0
}
