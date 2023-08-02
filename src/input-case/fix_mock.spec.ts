import { it, expect, describe, vi } from 'vitest'
import { mock_bar } from './index';

vi.mock('./indirectFn.ts', async (importOriginal) => {
  const original: any = await importOriginal()
  return {
    ...original,
    mock_foo() {
      return 'linz'
    }
  }
})

// 因为mock_bar中引入了mock_foo函数没有经过import导致此mock不准确 -> 因此需要把mock_foo提取到另一个文件然后进行 import 导出
it('should to be mock str', () => {
  expect(mock_bar()).toBe('linzbor');
})
