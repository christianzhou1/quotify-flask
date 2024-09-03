import { createRouter, createWebHistory } from "vue-router";
import Ping from "../components/Ping.vue";
import Home from "../components/Home.vue";
import About from "../components/About.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/ping",
      name: "ping",
      component: Ping,
    },
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});

export default router;
