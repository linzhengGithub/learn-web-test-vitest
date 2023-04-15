// 间接input - 第三方库
import axios from 'axios'
import { vi, it, expect, describe } from 'vitest'
import { getUserAge_axios, getUserAge_axiosGet } from './index'

vi.mock('axios')
describe('case third-party', () => {
  it('case axios', async () => {
    vi.mocked(axios).mockResolvedValue({name: 'lin', age: 18})

    const age = await getUserAge_axios()

    expect(age).toBe(18)
  })

  it('case axios.get', async () => {
    vi.mocked(axios.get).mockResolvedValue({name: 'lin', age: 19})

    const age = await getUserAge_axiosGet()

    expect(age).toBe(19)
  })
})
