import { it, expect, describe } from 'vitest'
import { createPinia, setActivePinia } from 'pinia';
import { useCommand } from './state'
import { useSetup, fireEvent } from '../tests/helper';
import * as misc from './misc';
import { vi } from 'vitest';
import { computed } from 'vue';

/* notes
  为什么使用 spyOn 来模拟实现
  如果使用
  vi.mock('./misc.ts', () => {
    return {
      useIsMac() { computed(() => true) }
    }
  })
  会导致这个路径下的其他函数找不到,因为只mock了一个函数,如果在别的case中使用了其它函数,会导致报错
  除非把其他的函数都mock进去
  vi.mock('./misc.ts', async () => {
    const actual = await vi.importActual('./misc.ts')
    return {
      ...actual,
      useIsMac() { computed(() => true) }
    }
  })
*/
// vi.spyOn(misc, 'useIsMac').mockImplementation(() => computed(() => true))

describe('modal state', () => {
  it('should be open', () => {
    setActivePinia(createPinia())
    const { openModal, getState } = useCommand()

    openModal()

    expect(getState()).toBe(true);
  })

  it('should be close', () => {
    setActivePinia(createPinia())
    const { openModal, closeModal, getState } = useCommand()

    openModal()
    closeModal()

    expect(getState()).toBe(false);
  })
})

describe('command trigger modal', () => {
  it('should be open when use command + k on Mac', () => {
    setActivePinia(createPinia())
    const { getState, registerKeyboardShortcut } = useCommand()
    vi.spyOn(misc, 'useIsMac').mockImplementation(() => computed(() => true))

    const { wrapper } = useSetup(() => registerKeyboardShortcut())
    fireEvent.keydown({
      key: 'k',
      metaKey: true
    })

    expect(getState()).toBe(true);

    wrapper.unmount()
  })

  it('should be open when use ctrl + k on Win', () => {
    setActivePinia(createPinia())
    const { getState, registerKeyboardShortcut } = useCommand()
    vi.spyOn(misc, 'useIsMac').mockImplementation(() => computed(() => false))

    const { wrapper } = useSetup(() => registerKeyboardShortcut())
    fireEvent.keydown({
      key: 'k',
      ctrlKey: true
    })

    expect(getState()).toBe(true);
    
    wrapper.unmount()
  })
})
