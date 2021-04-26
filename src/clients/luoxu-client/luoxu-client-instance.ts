import { LuoxuClient } from "@/clients/luoxu-client"

export const luoxu_client_instance = new LuoxuClient({
  base_url: process.env.VUE_APP_LUOXU_BASE_URL,
})
