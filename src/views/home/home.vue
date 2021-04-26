<template>
  <div>
    <div class="flex flex-col items-center w-screen pt-10">
      <h1 class="text-3xl text-gray-700">落絮</h1>
      <form
        class="flex flex-col items-center w-full px-5 mt-6 mb-4"
        @submit.prevent="search"
      >
        <div
          class="md:w-2/5 flex w-full p-1 px-6 border-2 border-gray-200 rounded-lg shadow-md"
        >
          <icon-search-circle class="my-2 text-gray-500" />
          <input
            v-model="state.query"
            class="w-full p-2 ml-2 border-none"
            type="text"
            required
          />
        </div>

        <div class="flex items-baseline">
          <p class="pr-2 text-lg">群：</p>
          <select v-model="selected_group_id" class="mt-4 mb-2">
            <option
              v-for="group in state.groups"
              :value="group.id"
              :key="group.id"
            >
              {{ group.name }}
            </option>
          </select>
        </div>

        <button class="p-1 font-bold text-gray-800">搜索</button>
      </form>
    </div>

    <div class="flex flex-col items-center">
      <home-pome />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { Group } from "@/models/group"
import { HomeState as State } from "./home-state"

@Component({
  name: "home",
  components: {
    "home-pome": () => import("@/views/home/home-poem.vue"),
    "icon-search-circle": () =>
      import("@/components/icons/icon-search-circle.vue"),
  },
})
export default class extends Vue {
  state = new State()

  selected_group_id: null | string = null

  async mounted(): Promise<void> {
    await this.state.init()
  }

  search(): void {
    if (this.selected_group_id) {
      const query = {
        g: this.selected_group_id.toString(),
        q: this.state.query,
      }

      this.$router.push({ path: "/search", query })
    }
  }
}
</script>
