import { useRouter } from 'vue-router'

export function useGoto() {
  const router = useRouter()

  function gotoHome() {
    router.push({
      name: 'Home',
    })
  }

  function gotoSettings() {
    router.push({
      name: 'Settings',
    })
  }

  return {
    gotoHome,
    gotoSettings,
  }
}
