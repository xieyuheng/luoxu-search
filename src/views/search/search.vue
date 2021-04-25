<template>
  <div>
    <div v-if="result">
      <div class="px-3 py-4 border-b-2 border-gray-300">
        <h1 class="font-bold">@{{ result.group_name }}</h1>
      </div>

      <div class="px-3">
        <div v-for="message in result.messages" class="py-2">
          <div class="text-xs font-bold text-gray-600 py-1 px-1">
            {{ message.from_name }}:
          </div>
          <div class="py-1 px-3">{{ message.text }}</div>
        </div>
      </div>
    </div>
    <div v-else class="my-8 flex justify-center">
      <p class="p-3 border border-gray-300 rounded-md inline-block">
        Loading...
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import { TgIndexerClient, SearchResult } from "@/clients/tg-indexer-client"

@Component({
  name: "search",
})
export default class extends Vue {
  @Prop() group_id!: number
  @Prop() query!: string

  result: null | SearchResult = null

  async mounted(): Promise<void> {
    const indexer = new TgIndexerClient({
      base_url: process.env.VUE_APP_TG_INDEXER_BASE_URL,
    })

    this.result = await indexer.search({
      group_id: this.group_id,
      query: this.query,
    })
  }
}
</script>
