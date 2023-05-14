import { it, expect, describe } from 'vitest'
import { emailValidator } from './emailValidator';

// 提供在多个 test case 中重用相同测试逻辑的方法
describe('emailValidator', () => {
  // it('should return true for valid email', () => {
  //   const email = 'valid-email@example.com'
  //   expect(emailValidator(email)).toBe(true)
  // })

  // it('should return false, because email not domain', () => {
  //   const email = 'valid-email@example'
  //   expect(emailValidator(email)).toBe(false)
  // })

  // it('should return false, because email with extra dot', () => {
  //   const email = 'va.l.i.d-email@example.'
  //   expect(emailValidator(email)).toBe(false)
  // })

  // it('should return false, because email with missing @', () => {
  //   const email = 'valid-email,example.com'
  //   expect(emailValidator(email)).toBe(false)
  // })

  // nodejs 占位符: https://nodejs.org/api/util.html#utilformatformat-args
  // 数组的方式
  it.each(
    [
      ['valid-email@example.com', true],
      ['valid-email@example', false],
      ['va.l.i.d-email@example.', false],
      ['valid-email,example.com', false],
    ]
  )('should return %s for when email is %s', (email, expected) => {
    expect(emailValidator(email)).toBe(expected);
  })

  // 对象的方式
  it.each(
    [
      { email: 'valid-email@example.com', expected: true },
    ]
  )('should return $email for when email is $expected', ({ email, expected }) => {
    expect(emailValidator(email)).toBe(expected);
  })

  // 模板标签的形式 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#description
  it.each`
    email                        | expected
    ${'valid-email@example.com'} | ${true}
    ${'valid-email@example'}     | ${false}
  `('should return $email for when email is $expected', ({ email, expected }) => {
    expect(emailValidator(email)).toBe(expected);
  })
})
