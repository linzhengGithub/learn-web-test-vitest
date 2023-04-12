export function getUserAge() {
  return 2
}

// 异步获取数据 api
export function api_getUserAge(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(2)
    }, 0)
  })
}

// class
export class User {
  name: string = 'lin'
  age: number = 18
  getAge(): number {
    return 18
  }
}

// object
export const config = {
  name: 'lin',
  age: 18,
  getAge() {
    return 18
  }
}

// constant
export const userAge:number = 2
export const userName:string = 'lin'

