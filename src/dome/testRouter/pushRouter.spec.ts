import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useRouter } from 'vue-router'
import { useGoto } from './composables'

vi.mock('vue-router')
const pushFn = vi.fn() // 好去监听他的调用
vi.mocked(useRouter as () => { push: Function }).mockImplementation(() => {
  return {
    push: pushFn,
  }
})
describe('theHeader', () => {
  beforeEach(() => {
    pushFn.mockClear()
  })
  it('should be go to home page', () => {
    const { gotoHome } = useGoto()

    gotoHome()

    expect(pushFn).toBeCalledWith({ name: 'Home' })
  })
  it('should be go to setting page', () => {
    const { gotoSettings } = useGoto()

    gotoSettings()

    expect(pushFn).toBeCalledWith({ name: 'Settings' })
  })
})
