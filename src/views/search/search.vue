<template>
  <div>
    <pre>{{ result }}</pre>
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
      base_url: "http://78.142.193.28:9008",
    })

    this.result = await indexer.search({
      group_id: this.group_id,
      query: this.query,
    })
  }
}
</script>
