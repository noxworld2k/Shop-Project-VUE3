import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import kontakt from "../views/kontakt.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/kontakt",
      name: "kontakt",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/kontakt.vue"),
    },
    {
      path: "/warzywa",
      name: "warzywa",
      component: HomeView,
    },
    {
      path: "/owoce",
      name: "owoce",
      component: HomeView,
    },
    {
      path: "/blog",
      name: "blog",
      component: HomeView,
    },
    {
      path: "/miody",
      name: "miody",
      component: HomeView,
    },
    {
      path: "/przetwory",
      name: "przetwory",
      component: HomeView,
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/AdminView.vue"),
    },
  ],
});

export default router;
