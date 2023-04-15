// node -> 使用process.env
// vite,webpack -> 使用 import.meta.env
import { it, expect, vi, afterEach } from 'vitest'
import { nodesEnvDoubleAge, vitesEnvDoubleAge } from './index';

// node 环境变量的测试
it('node env', () => {
  // vi.stubEnv 设置环境变量接受 name value 都是string类型 会将全局测试的环境变量 name 变成 你改写的 value
  vi.stubEnv('NODE_USER_AGE', '2')

  const age = nodesEnvDoubleAge()
  
  expect(age).toBe(4);

  // 撤销你改变的环境变量
  // vi.unstubAllEnvs()
})

// 撤销的方式也可以在 afterEach 生命周期中执行一边 减少代码
afterEach(() => {
  vi.unstubAllEnvs()
});

it('vite env', () => {
  vi.stubEnv('VITE_USER_AGE', '2')

  const age = vitesEnvDoubleAge()

  expect(age).toBe(4);
  
  // vi.unstubAllEnvs()
})

it('should', () => {
  console.log('--->',process.env.USER_AGE);
  // console.log('>>>',import.meta.env.VITE_USER_AGE);
})
