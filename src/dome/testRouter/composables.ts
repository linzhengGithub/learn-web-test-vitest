import { useRouter } from 'vue-router'

export const enum RouterNames {
  HOME = 'Home',
  SETTINGS = 'Settings'
}

export function useGoto() {
  const router = useRouter()

  function gotoHome() {
    router.push({
      name: RouterNames.HOME,
    })
  }

  function gotoSettings() {
    router.push({
      name: RouterNames.SETTINGS,
    })
  }

  return {
    gotoHome,
    gotoSettings,
  }
}

export function gotoGitHub() {
  window.open('https://www.github.com')
}
