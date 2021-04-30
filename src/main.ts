import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./app.vue"
import "./styles/index.css"

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: require("@/views/routes").routes,
})

createApp(App).use(router).mount("#app")
