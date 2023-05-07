/**
 * 监测今天是不是周五
 * @returns 是返回 happy 不是返回sad
 */
export function checkFriday(): string {
  const today = new Date()
  console.log(today.getDay());
  
  if(today.getDay() === 5) return 'happy'
  return 'sad'
}
