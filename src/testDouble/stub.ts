// stub 测试桩 (隔离依赖,更简单控制: 这个对象只有一部分行为是你关心的,不需要去处理和理解整个对象的复杂行为)

import { getUserEmail } from "./stub_fn"

export function sendWelcomeEmail(userId) {
  const email = getUserEmail(userId)
  return email
}

