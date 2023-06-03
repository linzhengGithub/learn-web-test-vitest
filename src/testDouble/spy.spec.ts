import { it, expect, describe, vi } from 'vitest'
import { User } from './spy'

it('test spy', () => {
  vi.spyOn(User, 'getName')

  User.getName()

  expect(User.getName).toBeCalled()
  expect(User.getName()).toBe('lin');
})
