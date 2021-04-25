export class Group {
  group_id: number
  group_name: string

  constructor(opts: { group_id: number; group_name: string }) {
    this.group_id = opts.group_id
    this.group_name = opts.group_name
  }
}
