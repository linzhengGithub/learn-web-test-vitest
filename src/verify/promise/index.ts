export const fetchUserData = () => {
  return new Promise((resolve, reject) => {
    resolve('1')
  })
}

export const delay = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('1')
    }, time);
  })
}

export class View {
  count: number = 1
  render() {
    Promise.resolve()
      .then(() => this.count = 2)
      .then(() => this.count = 3)
  }
}
