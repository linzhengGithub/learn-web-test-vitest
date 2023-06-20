import { beforeEach, afterEach, afterAll, vi } from 'vitest'
// 服务器层拦截测试
import { server } from './src/mocks/server'
// vue router mock
import { VueRouterMock, createRouterMock, injectRouterMock } from 'vue-router-mock';
import { config } from '@vue/test-utils';

beforeEach(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})

function setupRouterMock() {
  // init custom router
  const router = createRouterMock({
    spy: {
      create: fn => vi.fn(fn),
      reset: spy => spy.mockClear()
    }
  })
  // before test exe todo
  beforeEach(() => {
    router.reset()
    injectRouterMock(router)
  })
  // install
  config.plugins.VueWrapper.install(VueRouterMock)
}

setupRouterMock()
