<template>
  <div>
    <div v-if="state.group && state.messages">
      <div class="px-3 py-4 border-b-2 border-gray-300">
        <!-- <form
             class="flex flex-col items-center w-full px-5 my-6"
             @submit.prevent="search"
             >
             <div
             class="md:w-2/5 flex w-full p-1 px-6 border-2 border-gray-200 rounded-lg shadow-md"
             >
             <input
             v-model="query"
             class="w-full p-2 border-none"
             type="text"
             required
             />

             <button class="p-1 my-2 font-bold">
             <icon-search-circle class="my-2 text-gray-500" />
             </button>
             </div>
             </form> -->
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
    "icon-search-circle": () =>
      import("@/components/icons/icon-search-circle.vue"),
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

  search(): void {
    console.log("search")
  }
}
</script>
