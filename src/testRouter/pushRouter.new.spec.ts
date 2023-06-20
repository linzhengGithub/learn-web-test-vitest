import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useSetup } from '../tests/helper';
import { useGoto } from './composables'


describe('theHeader', () => {
  it('should be go to home page', () => {
    const { router } = useSetup(() => {
      const { gotoHome } = useGoto()
      gotoHome()
    })

    expect(router.push).toBeCalledWith({ name: 'Home' });
  })
  it('should be go to setting page', () => {
    const { router } = useSetup(() => {
      const { gotoSettings } = useGoto()
      gotoSettings()
    })

    expect(router.push).toBeCalledWith({ name: 'Settings' });
  })
})
