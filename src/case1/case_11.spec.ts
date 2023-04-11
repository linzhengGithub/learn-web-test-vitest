import { it, expect, describe, vi, beforeEach } from 'vitest'
import { getUserAge } from './user';
import { doubleUserAge } from './index';

// mock 替换真实逻辑

// 方式一:
// vitest - mock形式 - 全局
vi.mock('./user.ts', () => {
  return {
    getUserAge: () => 4
  }
})

describe('间接input_1', () => {
  it('case_1', () => {
    // given
    // when
    const age = doubleUserAge()
    // then
    expect(age).toBe(8)
  })
})


// 方式二:
// 实现given步骤 - 可读性
// vi.mock('./user.ts')
// describe('间接input_2', () => {
//   it('case_2', () => {
//     // given
//     vi.mocked(getUserAge).mockReturnValue(5)
//     // when
//     const age = doubleUserAge()
//     // then
//     expect(age).toBe(10)
//   })
// })

// 方式三:
// domock
// describe('间接input_3', () => {
//   beforeEach(() => {
//     vi.doMock('./user.ts', () => {
//       return {
//         getUserAge: () => 3
//       }
//     })
//   })
//   it('case_3', async () => {
//     // given
//     const { doubleUserAge } = await import('./index')
//     // when
//     const age = doubleUserAge()
//     // then
//     expect(age).toBe(6)
//   })
// })

it('case', () => {
  console.log(getUserAge());
})
