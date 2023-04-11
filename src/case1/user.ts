export function getUserAge() {
  return 2
}

// 异步获取数据 api
export function api_getUserAge(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(2)
    },0)
  })
}
