<template>
  <form
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
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"

@Component({
  name: "search-bar",
})
export default class extends Vue {
  @Prop() group_id!: string

  query: string = ""
}
</script>
