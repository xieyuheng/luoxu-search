<template>
  <p class="inline-block p-3 border border-gray-300 rounded-md">Loading...</p>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import { SearchState as State } from "./search-state"

@Component({
  name: "search-loading",
})
export default class extends Vue {
  @Prop() state!: State
}
</script>
