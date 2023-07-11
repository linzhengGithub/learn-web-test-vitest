import { describe, expect, it, vi } from 'vitest'
import { useSetup } from '../tests/helper';
import { useGoto, gotoGitHub, RouterNames } from './composables'


describe('theHeader', () => {
  it('should be go to home page', () => {
    const { router } = useSetup(() => {
      const { gotoHome } = useGoto()
      gotoHome()
    })

    expect(router.push).toBeCalledWith({ name: RouterNames.HOME });
  })
  it('should be go to setting page', () => {
    const { router } = useSetup(() => {
      const { gotoSettings } = useGoto()
      gotoSettings()
    })

    expect(router.push).toBeCalledWith({ name: RouterNames.SETTINGS });
  })
  it('should be go to github', () => {
    window.open = vi.fn()

    gotoGitHub()

    expect(window.open).toBeCalledWith('https://www.github.com')
  })
})
