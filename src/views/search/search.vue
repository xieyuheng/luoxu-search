<template>
  <div>
    <div v-if="state.group">
      <div class="flex flex-col justify-center py-3 border-b-2 border-gray-300">
        <div class="md:flex-row md:pt-3 md:pl-2 flex flex-col items-baseline">
          <h1 class="md:px-10 min-w-max px-3 py-1 text-2xl text-gray-700">
            <router-link :to="{ path: '/' }">落絮</router-link>
          </h1>
          <form class="md:px-0 w-full px-3 py-1" @submit.prevent="search">
            <div
              class="md:w-4/5 flex w-full px-2 border-2 border-gray-200 rounded-lg shadow-md"
            >
              <input
                v-model="state.query"
                class="w-full p-2 m-2 border-none"
                type="text"
                required
              />

              <button class="p-1 my-2 font-bold">
                <icon-search-circle class="text-gray-500" />
              </button>
            </div>
          </form>
        </div>

        <h1 class="md:px-44 px-3 pt-1 text-gray-800">
          @{{ state.group.pub_id }}
        </h1>
      </div>

      <div v-if="state.messages" class="md:px-44 px-3">
        <div class="px-1 py-2 text-gray-500">
          找到 {{ state.messages.length }} 条消息 --
        </div>
        <div v-for="message in state.messages" class="py-2">
          <message-card :message="message" />
        </div>
      </div>
    </div>
    <div v-else class="flex justify-center my-8">
      <search-loading :state="state" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, onMounted } from "vue"
import { useRouter, useRoute } from "vue-router"
import { SearchState as State } from "./search-state"

export default defineComponent({
  name: "search",
  components: {
    "message-card": require("@/components/message-card").default,
    "search-loading": require("@/views/search/search-loading.vue").default,
    "icon-search-circle": require("@/components/icons/icon-search-circle.vue")
      .default,
  },
  props: {
    group_id: { type: Number, required: true },
    query: { type: String, required: true },
  },
  setup(props) {
    const router = useRouter()
    const route = useRoute()

    const state = reactive<State>(
      new State({
        group_id: props.group_id,
        query: props.query,
      })
    )

    onMounted(async () => {
      await state.search()
    })

    async function search(): Promise<void> {
      const query = {
        g: props.group_id.toString(),
        q: state.query,
      }

      await state.search()

      if (query.g !== route.query.g || query.q !== route.query.q) {
        router.push({ path: "/search", query })
      }
    }

    return { state, search }
  },
})
</script>
