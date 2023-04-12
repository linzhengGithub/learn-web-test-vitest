import { getUserAge, api_getUserAge, User } from './user';
import axios from 'axios';

export function doubleUserAge() {
  return getUserAge() * 2
}

export async function api_doubleUserAge() {
  const age = await api_getUserAge()
  return age * 2
}

// class
export function getDoubleAgeUseClass_property() {
  const user = new User()
  return user.age * 2
}

export function getDoubleAgeUseClass_fn() {
  const user = new User()
  return user.getAge() * 2
}

interface UserType {
  name: string
  age: number
}

// third-party
export async function getUserAge_axios() {
  const user: UserType = await axios('./user-api')
  return user.age
}

export async function getUserAge_axiosGet() {
  const user: UserType = await axios.get('./user-api')
  return user.age
}
