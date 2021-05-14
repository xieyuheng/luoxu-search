import { Group } from "@/models/group"
import { MessageResult } from "@/clients/luoxu-client"

export class Message {
  id: number
  from_id: number
  from_name: string
  text: string
  t: number // NOTE unix timestamp
  group: Group

  constructor(opts: {
    id: number
    from_id: number
    from_name: string
    text: string
    t: number
    group: Group
  }) {
    this.id = opts.id
    this.from_id = opts.from_id
    this.from_name = opts.from_name
    this.text = opts.text
    this.t = opts.t
    this.group = opts.group
  }

  get time(): string {
    // NOTE to use unix timestamp in js multiple it by 1000

    const t = new Date(this.t * 1000)

    const YYYY = t.getFullYear()
    const MM = leftpad((t.getMonth() + 1).toString())
    const DD = leftpad(t.getDate().toString())

    const hh = leftpad(t.getHours().toString())
    const mm = leftpad(t.getMinutes().toString())
    const ss = leftpad(t.getSeconds().toString())

    return `${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}`

    function leftpad(s: string): string {
      return s.length === 1 ? "0" + s : s
    }
  }

  get link(): string {
    return `https://t.me/${this.group.pub_id}/${this.id}`
  }

  get tg_link(): string {
    return `tg://resolve?domain=${this.group.pub_id}&post=${this.id}`
  }

  get avatar(): string {
    return `https://lab.lilydjwg.me/luoxu/avatar/${this.from_id}`
  }

  // NOTE luoxu-client api adopter functions

  static from_message_result_and_group(
    result: MessageResult & { group: Group }
  ): Message {
    return new Message({
      id: result.id,
      from_id: result.from_id,
      from_name: result.from_name,
      text: result.text,
      t: result.t,
      group: result.group,
    })
  }
}
