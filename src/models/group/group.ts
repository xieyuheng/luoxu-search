import { GroupResult } from "@/clients/luoxu-client"

export class Group {
  group_id: number
  group_pub_id: string
  group_name: string

  constructor(opts: {
    group_id: number
    group_pub_id: string
    group_name?: string
  }) {
    this.group_id = opts.group_id
    this.group_pub_id = opts.group_pub_id
    this.group_name = opts.group_name || opts.group_pub_id
  }

  static from_group_result(group_result: GroupResult): Group {
    return new Group({
      group_id: group_result.group_id,
      group_pub_id: group_result.pub_id,
      group_name: group_result.name,
    })
  }
}
