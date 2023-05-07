/**
 * 基于 Math.random 生成一个随机字符串
 */

export function generateRandomString(length: number): string {
  let result = ''
  const str = 'abcdefghijklm'
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * str.length)
    result += str.charAt(randomIndex)
  }
  return result
}
