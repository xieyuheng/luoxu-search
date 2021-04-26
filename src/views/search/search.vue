<template>
  <div>
    <div v-if="state.group">
      <div class="flex flex-col justify-center py-3 border-b-2 border-gray-300">
        <div class="flex flex-col items-baseline md:flex-row md:pt-3 md:pl-2">
          <h1 class="py-1 px-3 md:px-6 text-2xl text-gray-700">LiLySearch</h1>
          <form class="py-1 px-3 md:px-0 w-full" @submit.prevent="search">
            <div
              class="md:w-4/5 flex w-full px-2 border-2 border-gray-200 rounded-lg shadow-md"
            >
              <input
                v-model="state.query"
                class="w-full m-2 p-2 border-none"
                type="text"
                required
              />

              <button class="p-1 my-2 font-bold">
                <icon-search-circle class="text-gray-500" />
              </button>
            </div>
          </form>
        </div>

        <h1 class="px-3 md:px-44 pt-1 text-gray-800">
          @{{ state.group.group_pub_id }}
        </h1>
      </div>

      <div v-if="state.messages" class="px-3 md:px-44">
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
    await this.state.search()
  }

  async search(): Promise<void> {
    const query = {
      g: this.group_id.toString(),
      q: this.query,
    }

    if (query.g !== this.$route.query.g || query.q !== this.$route.query.q) {
      this.$router.push({ path: "/search", query })
      await this.state.search()
    }
  }
}
</script>
