import { it, expect, describe, vi } from 'vitest'
import { UserStore } from './userStore'
import { UserClass } from './user'

// 状态验证
describe.skip('doc', () => {
  it('case doc', () => {
    const store = new UserStore()
    const userPlayer = new UserClass(store)

    const newUser = userPlayer.createUser('linzheng')

    expect(userPlayer.findUser(newUser.id)?.name).toBe('linzheng');
  })
})

// 行为验证
describe('behavior', () => {
  it('should be called', () => {
    // mock 方式1 prototype
    // UserStore.prototype.addUser = vi.fn()

    const store = new UserStore()

    // mock 方式2 vi.spyOn
    vi.spyOn(store, 'addUser')

    const userPlayer = new UserClass(store)

    userPlayer.createUser('linzheng')

    expect(store.addUser).toBeCalled()
  })
})
