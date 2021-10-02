<template>
  <div
    class="message-card max-w-max px-3 py-1 border border-gray-300 rounded-lg shadow-sm"
  >
    <p class="flex justify-between py-1 text-xs font-bold text-gray-600">
      {{ message.from_name }}
    </p>
    <p class="py-2 break-words whitespace-pre-line">{{ message.text }}</p>
    <div class="flex justify-end">
      <a :href="message.tg_link" class="underline">
        <p class="hover:text-gray-900 text-sm text-gray-500">
          {{ message.time }}
        </p>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { Message } from "@/models/message"

export default defineComponent({
  name: "message-card",
  props: {
    message: {
      type: Object as PropType<Message>,
      required: true,
    },
    search: {
      type: String,
      required: false,
    },
  },
})
</script>
