import { beforeEach, afterEach, afterAll } from 'vitest'
import { server } from './src/mocks/server'

beforeEach(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})
