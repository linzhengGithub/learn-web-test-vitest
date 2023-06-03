import { it, expect, describe } from 'vitest'
import { Message, Recipient, sendEmail } from './dummy'

it('test dummy', () => {
  const message: Message = {
    subject: 'hei',
    body: 'ha',
  }
  const _dummy_recipient = {} as Recipient

  sendEmail(message, _dummy_recipient)
})
