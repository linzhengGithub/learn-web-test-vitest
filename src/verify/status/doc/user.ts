import { UserStore } from "./userStore"

export interface User {
  id: number
  name: string
}
export class UserClass {
  constructor(private store: UserStore) { }

  createUser(name: string): User {
    const id = Math.floor(Math.random() * 1000) + 1
    const user: User = { id, name }
    this.store.addUser(user)
    return user
  }

  findUser(id: number): User | undefined {
    return this.store.getUser(id)
  }
}
