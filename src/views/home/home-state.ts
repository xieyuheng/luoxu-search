import { Group } from "@/models/group"
import { Message } from "@/models/message"
import { LuoxuClient } from "@/clients/luoxu-client"

export class HomeState {
  query: string = ""
  group_id: string = ""
  groups: null | Array<Group> = null

  constructor() {}

  get client(): LuoxuClient {
    return new LuoxuClient({
      base_url: process.env.VUE_APP_LUOXU_BASE_URL,
    })
  }

  async init(): Promise<void> {
    const result = await this.client.groups()

    this.groups = result.map(Group.from_group_result)
  }
}
