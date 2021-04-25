<template>
  <div>
    <div v-if="result">
      <h1>{{ result.group_name }}</h1>
      <h1>{{ result.group_id }}</h1>
      <pre v-for="message in result.messages">{{ message }}</pre>
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
