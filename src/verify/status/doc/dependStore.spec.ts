import { it, expect, describe } from 'vitest'
import { UserStore } from './userStore'
import { UserClass } from './user'

describe('doc', () => {
  it('case doc', () => {
    const store = new UserStore()
    const userPlayer = new UserClass(store)

    const newUser = userPlayer.createUser('linzheng')

    expect(userPlayer.findUser(newUser.id)?.name).toBe('linzheng');
  })
})
