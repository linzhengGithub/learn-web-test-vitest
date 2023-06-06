import { it, expect, describe, test } from 'vitest'
import { Animal } from './gc'

// 临时的数据只在作用域内生效,利用垃圾回收机制
test('set name', () => {
  const dog = new Animal('xiaoBai')

  expect(dog.sayHi()).toBe('hi my name is xiaoBai');
})
