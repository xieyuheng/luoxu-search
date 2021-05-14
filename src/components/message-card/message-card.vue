<template>
  <div class="message-card max-w-max px-3 py-1 border border-gray-300 rounded-lg shadow-sm">
    <div class="flex flex-row space-x-4">
      <span>
        <!-- <img class="object-contain h-16 avatar" :src="message.avatar" :alt="message.id"/> -->
        <avatar class="object-contain h-16 avatar" :src="message.avatar" :username="message.from_name"/>
      </span>
      <span>
        <p class="flex justify-between py-1 text-xs font-bold text-gray-600">
          {{ message.from_name }}
        </p>
        <p class="py-2 break-words whitespace-pre-line">
          <highlight v-once :message="message.text" :search="search" />
        </p>
      </span>
    </div>
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
  components: {
    highlight: require("@/components/highlight").default,
    avatar: require("@/components/avatar").default,
  },
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

<style>
.avatar{
  border-radius: 50%;
}
</style>
