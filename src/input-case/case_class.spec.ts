// 间接input - class
import { it, expect, describe, vi } from 'vitest'
import { getDoubleAgeUseClass_fn, getDoubleAgeUseClass_property } from './index';

vi.mock('./user.ts', () => {
  return {
    User: class User {
      age: number = 10
      getAge() {
        return 2
      }
    }
  }
})
describe('input class', () => {
  // 属性
  it('case class', () => {
    const age = getDoubleAgeUseClass_property()

    expect(age).toBe(20)
  })
  // 方法
  it('case class fn', () => {
    const age = getDoubleAgeUseClass_fn()

    expect(age).toBe(4)
  })
})
