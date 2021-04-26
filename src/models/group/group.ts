import { GroupResult, SearchResult } from "@/clients/luoxu-client"

export class Group {
  id: number
  pub_id: string
  name: string

  constructor(opts: { id: number; pub_id: string; name?: string }) {
    this.id = opts.id
    this.pub_id = opts.pub_id
    this.name = opts.name || opts.pub_id
  }

  // NOTE luoxu-client api adopter functions

  static from_group_result(result: GroupResult): Group {
    return new Group({
      id: result.group_id,
      pub_id: result.pub_id,
      name: result.name,
    })
  }

  static from_search_result(result: SearchResult): Group {
    return new Group({
      id: result.group_id,
      pub_id: result.group_pub_id,
    })
  }
}
