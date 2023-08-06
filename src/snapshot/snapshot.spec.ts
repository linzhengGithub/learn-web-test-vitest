import { it, expect } from 'vitest'
import Hi from './Hi.vue';
import { mount } from '@vue/test-utils';

// 快照测试通常是给UI组件的一种测试

// 如果修改了原本的快照值,你认为是正常更新的话,在watch模式下可以直接使用快捷键u去更新快照;
// 如果不在watch模式下,使用命令行pnpm test snapshot.spec --update, 执行测试文件后面跟上 --update
it('snapshot data', () => {
  expect({ name: '123', age: 10 }).toMatchSnapshot()
})

it('snapshot component', () => {
  const wrapper = mount(Hi).html()
  expect(wrapper).toMatchSnapshot()
})

// 直接在此文件家中就能观察到的快照结构
it('snapshot inline', () => {
  expect({ name: '123', age: 10 }).toMatchInlineSnapshot(`
    {
      "age": 10,
      "name": "123",
    }
  `)
})

// 高亮的html的文件
it('snapshot file', () => {
  const wrapper = mount(Hi).html()
  expect(wrapper).toMatchFileSnapshot('./Hi.html')
})
