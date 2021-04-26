import { Group } from "@/models/group"
import { Message } from "@/models/message"
import { LuoxuClient } from "@/clients/luoxu-client"

export class SearchState {
  group_id: number
  query: string

  group: null | Group = null
  messages: null | Array<Message> = null

  constructor(opts: { group_id: number; query: string }) {
    this.group_id = opts.group_id
    this.query = opts.query
  }

  get client(): LuoxuClient {
    return new LuoxuClient({
      base_url: process.env.VUE_APP_LUOXU_BASE_URL,
    })
  }

  async search(): Promise<void> {
    const result = await this.client.search({
      group_id: this.group_id,
      query: this.query,
    })

    const group = new Group({
      group_id: this.group_id,
      group_pub_id: result.group_pub_id,
    })

    this.group = group

    if (this.query) {
      this.messages = result.messages.map(
        (message) =>
          new Message({
            ...message,
            group,
          })
      )
    } else {
      this.messages = null
    }
  }
}
