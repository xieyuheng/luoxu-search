<template>
  <div>
    <div>
      {{ group_id }}
    </div>
    <div>
      {{ query }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"

@Component({
  name: "search",
})
export default class extends Vue {
  @Prop() group_id!: number
  @Prop() query!: string
}
</script>
