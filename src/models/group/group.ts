export class Group {
  group_id: number
  group_pub_id: string

  constructor(opts: { group_id: number; group_pub_id: string }) {
    this.group_id = opts.group_id
    this.group_pub_id = opts.group_pub_id
  }
}
