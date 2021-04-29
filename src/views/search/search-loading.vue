<template>
  <p class="inline-block p-3 border border-gray-300 rounded-md">搜索中...</p>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { SearchState as State } from "./search-state"

export default defineComponent({
  name: "search-loading",
  props: {
    state: {
      type: Object as PropType<State>,
      required: true,
    },
  },
})
</script>
