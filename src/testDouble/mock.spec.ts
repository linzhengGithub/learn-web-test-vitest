import { it, expect, describe, vi } from 'vitest'
import { User } from './spy'

it('test mock', () => {
  vi.spyOn(User, 'getName').mockImplementation(() => 'zheng')

  expect(User.getName()).toBe('zheng');
})
