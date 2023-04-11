import { getUserAge, api_getUserAge } from './user';

export function doubleUserAge() {
  return getUserAge() * 2
}

export async function api_doubleUserAge() {
  const age = await api_getUserAge()
  return age * 2
}
