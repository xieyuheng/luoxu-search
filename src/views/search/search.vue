<template>
  <div>
    <div v-if="state.group && state.messages">
      <div class="px-3 py-4 border-b-2 border-gray-300">
        <h1 class="font-bold">@{{ state.group.group_name }}</h1>
      </div>

      <div class="px-3">
        <div class="px-1 py-2 text-gray-500">
          Found {{ state.messages.length }} results :)
        </div>
        <div v-for="message in state.messages" class="py-2">
          <message-card :message="message" />
        </div>
      </div>
    </div>
    <div v-else class="flex justify-center my-8">
      <search-loading :state="state" />
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
    "search-loading": () => import("@/views/search/search-loading.vue"),
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
