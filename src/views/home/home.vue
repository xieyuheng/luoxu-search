<template>
  <div>
    <div class="flex flex-col items-center w-screen py-10">
      <h1 class="text-3xl text-gray-700">LiLySearch</h1>
      <form
        class="flex flex-col items-center w-full px-5 my-6"
        @submit.prevent="search"
      >
        <div
          class="md:w-2/5 flex w-full p-1 px-6 border-2 border-gray-200 rounded-lg shadow-md"
        >
          <icon-search-circle class="my-2 text-gray-500" />
          <input
            v-model="query"
            class="w-full p-2 ml-2 border-none"
            type="text"
            required
          />
        </div>

        <label class="flex items-baseline py-3">
          <p class="text-gray-700">Group ID:</p>
          <div class="ml-2 border-b border-gray-700">
            <input
              v-model="group_id"
              class="border-none"
              type="number"
              placeholder="must be a number"
              required
            />
          </div>
        </label>
        <button class="p-1 my-2 font-bold">SEARCH</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { HomeState as State } from "./home-state"

@Component({
  name: "home",
  components: {
    "icon-search-circle": () =>
      import("@/components/icons/icon-search-circle.vue"),
  },
})
export default class extends Vue {
  query: string = ""
  group_id: string = ""

  state = new State()

  async mounted(): Promise<void> {
    await this.state.init()
  }

  search(): void {
    this.$router.push({
      path: "/search",
      query: {
        g: this.group_id,
        q: this.query,
      },
    })
  }
}
</script>

<style scoped>
input[type="number"] {
  -moz-appearance: textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
