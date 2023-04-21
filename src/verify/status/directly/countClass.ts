export class counterClass {
  private count: number

  constructor() {
    this.count = 0
  }

  increment() {
    this.count++
  }

  getCountValue(){
    return this.count
  }
}
