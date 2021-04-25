import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
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

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
