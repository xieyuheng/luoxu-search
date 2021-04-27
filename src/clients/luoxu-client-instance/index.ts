import { LuoxuClient } from "@/clients/luoxu-client"

const client = new LuoxuClient({
  base_url: process.env.VUE_APP_LUOXU_BASE_URL,
})

export default client
