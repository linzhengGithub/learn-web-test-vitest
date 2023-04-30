import { it, expect, describe, vi } from 'vitest'
import { getTip, login, loginV2 } from './login';
import { lzLogin } from 'lz';

// 行为验证
// 破坏了封装性(白盒测试,暴漏了内部的实现细节);丧失了测试的有效性
// 比如在重构时修改 方法名字 会导致测试时通过的,项目跑不起来

vi.mock('lz', () => {
  return {
    // lzLogin: vi.fn() // 记录
    // 设置mock返回值 方式1
    lzLogin: vi.fn().mockReturnValue(true) 
    // 设置mock返回值 方式2
    // lzLogin: vi.fn(() => true)
  }
})

describe('login', () => {
  it('第三方库中的 lzLogin should be called', () => {
    login('linzheng', 'key123456')

    // 是否被调用
    expect(lzLogin).toBeCalled()
    // 调用时传参是什么
    // expect(lzLogin).toBeCalledWith('linzheng', 'key123456') 
    // 被调用次数
    // expect(lzLogin).toBeCalledTimes(1)
  })

  it('v2', () => {
    loginV2('linzheng', 'key123456')

    expect(lzLogin).toBeCalled()
    expect(getTip()).toBe('success');
  })
  
})
