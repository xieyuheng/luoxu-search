<template>
  <div class="max-w-max px-3 py-1 border border-gray-300 rounded-lg shadow-sm">
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
import { Component, Vue, Prop } from "vue-property-decorator"
import { Message } from "@/models/message"

@Component({
  name: "message-card",
})
export default class extends Vue {
  @Prop() message!: Message
}
</script>
