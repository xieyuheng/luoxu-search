import { Group } from "@/models/group"
import { Message } from "@/models/message"
import client from "@/clients/luoxu-client-instance"

export class HomeState {
  query: string = ""
  groups: null | Array<Group> = null

  constructor() {}

  async init(): Promise<void> {
    const result = await client.groups()

    this.groups = result.map(Group.from_group_result)
  }
}
