<template>
  <!-- v-for with template seems broken-->
  <span v-for="message in messageItemList" :key="message.id">
    <span class="highlight" v-if="message.matched">{{ message.text }}</span>
    <span v-else>{{ message.text }}</span>
  </span>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { Message } from "@/models/message"

export default defineComponent({
  name: "highlight",
  props: {
    message: {
      type: String as PropType<Message["text"]>,
      required: true,
    },
    search: {
      type: String,
      required: false,
    },
  },
  computed: {
    messageItemList(): { text: string; matched: boolean; id: number }[] {
      if (!this.search) return [{ text: this.message, matched: false, id: 1 }]
      const santilized = this.search?.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      const re = new RegExp(`([^${santilized}]*)([${santilized}])`, "ig")
      const result = []
      let match
      let savedLastIndex = 0
      while ((match = re.exec(this.message)) !== null) {
        result.push({ text: match[1], matched: false })
        result.push({ text: match[2], matched: true })
        savedLastIndex = re.lastIndex
      }
      result.push({ text: this.message.slice(savedLastIndex), matched: false })
      return result.filter((e) => !!e.text).map((e, i) => ({ ...e, id: i + 1 }))
    },
  },
})
</script>
<style scoped>
.highlight {
  background-color: #68932f;
  color: #d2ff96;
}
</style>
