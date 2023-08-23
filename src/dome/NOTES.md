什么内容需要测试 & 值得测试:
   1. 测试存在逻辑处理的点
   2. 具体库的某些配置项;改动少的;改动后易被察觉到的.不被纳入测试点
   3. 有些内容不易测试,可选择只测试某个方法是否有被调用到的测试策略

不要多余的测试数据,以免造成其他测试的污染

单测是编写需要 UI 和 数据 区分开来,实现数据驱动视图

处理setTimeout --> vi.useFakeTimers()

处理promise --> await vi.advanceTimersToNextTimerAsync() // 是一个异步的

处理多个promise -> await vi.runAllTimersAsync() // 是一个异步的

对于mock的函数/值要及时清空避免污染自身或者其他的测试case --> xxx.mockClear()

在遇到验证数据结构的时候,可以使用 expect(xx).toHaveProperty('id') 的方式

mock数据时应该于生产环境的数据分开,单独创建一份作用区域内的数据

推荐前门准备数据(通过一个固定的API去调用这个数据), 不推荐后门准备数据(在遇到要mock数据的时候都自己手写一边数据)

发现bug,可以先写一个描述单测,然后去完善这个单测使其通过

vi.mock 之后一定要记得在 beforeEach 中清空全部mock vi.clearAllMocks()

TDD: 先将功能描述成测试 -> 再将功能去实现 -> 完成之后进行代码重构

想到一个 happy path 就先写一个case,之后想到别的在补充,不要过于追求完美

测试2个数据的数据结构可以使用快照snapshot. tip: 需要在数据结构确定了之后再去写,留在最后去写
