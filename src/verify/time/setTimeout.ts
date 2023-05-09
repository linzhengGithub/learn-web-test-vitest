export class User{
  id: string

  constructor(id: string) {
    this.id = id
  }

  fetchData(callback: (data: string) => void, delay: number) {
    setTimeout(() => {
      const data = `user id is ${this.id}`
      callback(data)
    }, delay);
  }

  fetchDataV2(callback: (data: string) => void) {
    setTimeout(() => {
      const data = `user id is ${this.id}`
      callback(data)
    }, 1000);
  }

}
