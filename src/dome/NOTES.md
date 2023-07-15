处理setTimeout --> vi.useFakeTimers()
处理promise --> await vi.advanceTimersToNextTimerAsync() // 是一个异步的
处理多个promise -> await vi.runAllTimersAsync() // 是一个异步的

对于mock的函数/值要及时清空避免污染自身或者其他的测试case --> xxx.mockClear()
