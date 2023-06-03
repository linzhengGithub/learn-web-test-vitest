import { it, expect, describe, vi } from 'vitest'
import { sendWelcomeEmail } from './stub'

vi.mock('./stub_fn.ts', () => {
  return {
    getUserEmail: () => 'test@gmail.com'
  }
})

it('test stub', () => {
  const email = sendWelcomeEmail(1)

  expect(email).toBe('test@gmail.com');
})
