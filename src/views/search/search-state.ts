import { Group } from "@/models/group"
import { Message } from "@/models/message"
import { TgIndexerClient } from "@/clients/tg-indexer-client"

export class SearchState {
  group_id: number
  query: string

  group: null | Group = null
  messages: null | Array<Message> = null

  constructor(opts: { group_id: number; query: string }) {
    this.group_id = opts.group_id
    this.query = opts.query
  }

  async init(): Promise<void> {
    const indexer = new TgIndexerClient({
      base_url: process.env.VUE_APP_TG_INDEXER_BASE_URL,
    })

    const result = await indexer.search({
      group_id: this.group_id,
      query: this.query,
    })

    const group = new Group({
      group_id: this.group_id,
      group_name: result.group_name,
    })

    this.group = group

    this.messages = result.messages.map(
      (message) => new Message({ ...message, group })
    )
  }
}
