import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: () => import("@/views/home"),
  },
  {
    path: "/search",
    component: () => import("@/views/search"),
    props: (route) => ({
      group_id: Number.parseInt(route.query.g as string),
      query: route.query.q,
    }),
  },
]
