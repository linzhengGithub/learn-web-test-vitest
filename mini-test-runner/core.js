// test it
// expect toBe
// test.only
// 提示是否通过/报错
// beforeAll beforeEach afterEach afterAll
// describe
// 自动执行所有的测试脚本 *.spec.js

const tests = []
const onlys = []
const beforeAlls = []
const beforeEachs = []
const afterEachs = []
const afterAlls = []

export function test(name, callback) {
  tests.push({ name, callback })
}

test.only = (name, callback) => {
  onlys.push({ name, callback })
}

export const it = test

export function expect(actual) {
  return {
    toBe(expected) {
      if (expected === actual) {
      } else {
        throw new Error(`fail actual:${actual} expected:${expected}`)
      }
    }
    // TODO toEqual
  }
}

export function beforeAll(callback) {
  beforeAlls.push(callback)
}

export function beforeEach(callback) {
  beforeEachs.push(callback)
}

export function afterEach(callback) {
  afterEachs.push(callback)
}

export function afterAll(callback) {
  afterAlls.push(callback)
}

export function describe(name, callback) {
  callback()
}

export function run() {
  const suit = onlys.length ? onlys : tests

  for (const beforeAllCallback of beforeAlls) {
    beforeAllCallback()
  }

  for (const test of suit) {

    for (const beforeEachCallback of beforeEachs) {
      beforeEachCallback()
    }

    try {
      test.callback()
      console.log(`ok:${test.name}`);
    } catch (error) {
      console.log(`fail:${error}`);
    }

    for (const afterEachCallback of afterEachs) {
      afterEachCallback()
    }

  }

  for (const afterAllCallback of afterAlls) {
    afterAllCallback()
  }
}

