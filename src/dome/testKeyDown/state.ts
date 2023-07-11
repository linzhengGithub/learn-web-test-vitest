// 状态存储
import { defineStore } from 'pinia';
import { ref, onMounted, onUnmounted } from 'vue';
import { useIsMac } from './misc';

export const useCommand = defineStore('app-command', () => {
  const showModal = ref(false)

  const getState = () => {
    return showModal.value
  }

  const openModal = () => {
    showModal.value = true
  }

  const closeModal = () => {
    showModal.value = false
  }

  const registerKeyboardShortcut = () => {
    // Command + K will show command in MacOS
    // Ctrl + K in Windows
    const isMac = useIsMac()
    const keydownHandler = (e: KeyboardEvent) => {
      if (
        (e.key === 'k')
        && (isMac.value ? e.metaKey : e.ctrlKey)
      ) {
        e.preventDefault()
        openModal()
      }
    }

    onMounted(() => {
      window.addEventListener('keydown', keydownHandler)
    })
    onUnmounted(() => {
      window.removeEventListener('keydown', keydownHandler)
    })
  }



  return {
    openModal,
    closeModal,
    registerKeyboardShortcut,
    getState,
  }
})

