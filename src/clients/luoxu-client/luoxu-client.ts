import axios, { AxiosInstance } from "axios"

// NOTE luoxu is a opensource telegram indexer:
// - repo: https://github.com/lilydjwg/luoxu
// - example deployment:
//   - https://lab.lilydjwg.me/luoxu/search?g=1031857103&q=wps

export type MessageResult = {
  id: number
  from_id: number
  from_name: string
  text: string
  t: number
}

export type SearchResult = {
  group_pub_id: string
  group_id: string
  messages: Array<MessageResult>
}

export type GroupResult = {
  group_id: number
  name: string
  pub_id: string
}

export class LuoxuClient {
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

  async groups(): Promise<Array<GroupResult>> {
    const { data } = await this.requester.get(`/groups`)

    return data
  }
}
