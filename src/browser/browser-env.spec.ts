import { it, expect, describe } from 'vitest'
import { getName } from './browser-env';

it('browser env', () => {
  localStorage.setItem('name', 'lin')
  expect(getName()).toBe('lin');
})
