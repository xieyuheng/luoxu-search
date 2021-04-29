import { RouteRecordRaw } from "vue-router"

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: require("@/views/home").default,
  },
  {
    path: "/search",
    component: require("@/views/search").default,
    props: (route) => ({
      group_id: Number.parseInt(route.query.g as string),
      query: route.query.q,
    }),
  },
]
