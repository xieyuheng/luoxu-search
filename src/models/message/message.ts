import { Group } from "@/models/group"

export class Message {
  id: number
  from_id: number
  from_name: string
  text: string
  t: number

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

  // get time(): string {
  //   return new Date(this.t).toString()
  // }

  get link(): string {
    return `https://t.me/${this.group.group_name}/${this.id}`
  }
}
