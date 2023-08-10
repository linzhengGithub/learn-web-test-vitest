单测是编写需要 UI 和 数据 区分开来,实现数据驱动视图

处理setTimeout --> vi.useFakeTimers()

处理promise --> await vi.advanceTimersToNextTimerAsync() // 是一个异步的

处理多个promise -> await vi.runAllTimersAsync() // 是一个异步的

对于mock的函数/值要及时清空避免污染自身或者其他的测试case --> xxx.mockClear()

在遇到验证数据结构的时候,可以使用 expect(xx).toHaveProperty('id') 的方式

mock数据时应该于生产环境的数据分开,单独创建一份作用区域内的数据

推荐前门准备数据(通过一个固定的API去调用这个数据), 不推荐后门准备数据(在遇到要mock数据的时候都自己手写一边数据)

发现bug,可以先写一个描述单测,然后去完善这个单测使其通过
