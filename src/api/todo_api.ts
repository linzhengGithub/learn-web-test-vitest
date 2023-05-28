import axios from 'axios';

export function fetchAddTodo(title: string) {
  return axios.post('/api/addTodo', { title }).then(({ data }) => {
    return data
  })
}
