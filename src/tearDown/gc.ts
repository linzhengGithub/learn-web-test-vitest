export class Animal {
  private name: string
  constructor(name: string) {
    this.name = name
  }
  sayHi() {
    return `hi my name is ${this.name}`
  }
}
