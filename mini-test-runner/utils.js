export function deepEqual(obj1, obj2) {
  // 判断值是否相同
  if (obj1 === obj2) {
    return true
  }
  // 判断是不是对象类型，且不能为null
  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    throw new Error('Values are not objects');
  }
  // 比较两个值的构造函数
  if (obj1.constructor !== obj2.constructor) {
    throw new Error('Objects have different constructors');
  }
  // 检查 obj1 和 obj2 是否具有相同的属性
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    throw new Error(`The objects have different numbers of properties: ${obj1Keys.length} vs ${obj2Keys.length}`);
  }
  // 比较 obj1 和 obj2 的每个属性
  for (let prop of obj1Keys) {
    if (!obj2.hasOwnProperty(prop)) {
      throw new Error(`The '${prop}' property is missing in the second object`);
    }

    // 如果属性值是字符串，直接比较它们的值
    if (typeof obj1[prop] === 'string' || obj1[prop] instanceof String) {
      if (obj1[prop] !== obj2[prop]) {
        throw new Error(`The '${prop}' property has different values: ${obj1[prop]} vs ${obj2[prop]}`);
      }
    } else {
      // 如果属性值不是字符串，则递归比较它们
      if (!deepEqual(obj1[prop], obj2[prop])) {
        throw new Error(`The '${prop}' property is different`);
      }
    }
  }

  return true
}
