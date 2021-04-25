<template>
  <div>
    <div v-if="state.group">
      <div class="px-3 py-4 border-b-2 border-gray-300">
        <h1 class="font-bold">@{{ state.group.group_name }}</h1>
      </div>

      <div v-if="state.messages" class="px-3">
        <div class="px-1 py-2 text-gray-500">
          Found {{ state.messages.length }} results :)
        </div>
        <div v-for="message in state.messages" class="py-2">
          <message-card :message="message" />
        </div>
      </div>
    </div>
    <div v-else class="flex justify-center my-8">
      <p class="inline-block p-3 border border-gray-300 rounded-md">
        Loading...
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import { SearchState as State } from "./search-state"

@Component({
  name: "search",
  components: {
    "message-card": () => import("@/components/message-card"),
  },
})
export default class extends Vue {
  @Prop() group_id!: number
  @Prop() query!: string

  state = new State({
    group_id: this.group_id,
    query: this.query,
  })

  async mounted(): Promise<void> {
    this.state.init()
  }
}
</script>
