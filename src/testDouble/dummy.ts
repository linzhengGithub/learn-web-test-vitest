// dummy 哑元对象 (占位符: 解决类型报错)

export interface Message {
  subject: string
  body: string
}
export interface Recipient {
  email: string
  name: string
}

export function sendEmail(message: Message, recipient: Recipient) {
  // 使用 message
  console.log(`email subject: ${message.subject}`);
  console.log(`email body: ${message.body}`);

  // 其他逻辑运用到 recipient
  // console.log(recipient);
}
