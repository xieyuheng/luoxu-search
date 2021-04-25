import {
  TgIndexerClient,
  SearchResult,
  MessageResult,
} from "@/clients/tg-indexer-client"

export class SearchState {
  group_id: number
  query: string

  group_name: null | string = null
  messages: null | Array<MessageResult> = null

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

    this.group_name = result.group_name
    this.messages = result.messages
  }

  message_link(message: MessageResult): string {

    if (this.group_name) {
      return `https://t.me/${this.group_name}/${message.id}`
    } else {
      return `https://t.me/${this.group_id}/${message.id}`
    }
  }
}
