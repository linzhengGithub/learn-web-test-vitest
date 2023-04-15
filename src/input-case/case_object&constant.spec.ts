// 间接input - object & constant
import { it, expect, describe, vi } from 'vitest'
import { config, getUserAge, userAge, userName } from './user';

vi.mock('./user', async (importOriginal) => {
  // 想要保留 './user' 中过所有的东西
  const other: any = await importOriginal()
  return {
    ...other as any,
    // 想要保留 './user' 中 config 其他的 property
    config: Object.assign(other.config as any, { age: 20 }),
    // 只想测试其中一种 property
    // config: {
    //   age: 20
    // }
    userAge: 12
  }
})

describe('case object', () => {
  it('case object property', () => {
    const age = config.age
    const name = config.name

    expect(age).toBe(20);
    expect(name).toBe('lin');
  })

  it('case other contant', () => {
    const age = getUserAge()
    expect(age).toBe(2);
  })

  it('case constant', () => {
    expect(userName).toBe('lin');
    expect(userAge).toBe(12);
  })
})
