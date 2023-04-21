import { User } from "./user";

export class UserStore {
  private users: User[] = []

  addUser(user: User): void {
    this.users.push(user)
  }

  getUser(id: number): User | undefined {
    return this.users.find(user => user.id === id)
  }
}
