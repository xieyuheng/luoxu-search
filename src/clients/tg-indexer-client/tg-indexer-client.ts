import axios, { AxiosInstance } from "axios"

// NOTE
// - example:
//   - http://78.142.193.28:9008/search?g=1031857103&q=wps

export type SearchResult = {
  group_name: string
  group_id: string
  messages: Array<MessageResult>
}

export type MessageResult = {
  id: number
  from_id: number
  from_name: string
  text: string
  t: number
}

export class TgIndexerClient {
  base_url: string

  constructor(opts: { base_url: string }) {
    this.base_url = opts.base_url
  }

  get requester(): AxiosInstance {
    return axios.create({
      baseURL: this.base_url,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
  }

  async search(opts: {
    group_id: number
    query: string
  }): Promise<SearchResult> {
    const { group_id, query } = opts

    const { data } = await this.requester.get(`/search`, {
      params: {
        g: group_id,
        q: query,
      },
    })

    return data
  }
}
