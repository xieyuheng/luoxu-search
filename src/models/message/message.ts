export class Message {
  id: number
  from_id: number
  from_name: string
  text: string
  t: number

  constructor(opts: {
    id: number
    from_id: number
    from_name: string
    text: string
    t: number
  }) {
    this.id = opts.id
    this.from_id = opts.from_id
    this.from_name = opts.from_name
    this.text = opts.text
    this.t = opts.t
  }

  // get link(): string {

  //   if (this.group_name) {
  //     return `https://t.me/${this.group_name}/${message.id}`
  //   } else {
  //     return `https://t.me/${this.group_id}/${message.id}`
  //   }
  // }
}
