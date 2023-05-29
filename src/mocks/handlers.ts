import { rest } from 'msw';

export function mockAddTodo() {
  return rest.post('http://localhost/api/addtodo', async (req, res, ctx) => {
    const { title } = await req.json()
    return res(
      ctx.json({
        data: { todo: { id: 1, title } }
      })
    )
  })
}

export function mockRemoveTodo() {
  return rest.post('http://localhost/api/removetodo', async (req, res, ctx) => {
    const { id } = await req.json()
    return res(
      ctx.json({
        data: { id }
      })
    )
  })
}

export function mockUpdateTodo(todoList: any[]) {
  return rest.get('http://localhost/api/todoList', (req, res, ctx) => {
    return res(
      ctx.json({
        data: { todoList }
      })
    )
  })
}
