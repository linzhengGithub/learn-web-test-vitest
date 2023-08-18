import { it, expect, describe, beforeEach, vi } from 'vitest'
import AxiosMockAdapter from 'axios-mock-adapter';
import { http } from './http';
import { errorMessage } from './httpHelper';

vi.mock('./httpHelper.ts')

describe('http case dome', () => {
  beforeEach(() => {

  })
  it('should return data when code is 0', async () => {
    const axiosMock = new AxiosMockAdapter(http)

    const data = '123';
    axiosMock.onGet('/tasks').reply(200, {
      code: 0,
      data,
      message: ''
    })
    const result = await http.get('/tasks')

    expect(result.data).toBe(data);
  })

  it('should return error when code is not 0', async () => {
    const axiosMock = new AxiosMockAdapter(http)

    const message = 'an error';
    axiosMock.onGet('/tasks').reply(200, {
      code: -1,
      data: null,
      message: message
    })

    await expect(() => http.get('/tasks')).rejects.toThrowError(message)
    expect(errorMessage).toBeCalledWith(message)
  })

  it('should return error when code is 401', async () => {
    const axiosMock = new AxiosMockAdapter(http)

    axiosMock.onGet('/tasks').reply(401)

    await expect(() => http.get('/tasks')).rejects.toThrowError()
  })
})
