import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Cocktails",
      name: "cocktails",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CocktailsView.vue"),
    },
    {
      path: "/Menus",
      name: "menus",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/MenuView.vue"),
    },
    {
      path: "/Menus/:id",
      name: "meal-details",
      component: () => import("../components/MealDetails.vue"),
      props: true,
    },
    {
      path: "/Favorites",
      name: "Favorites",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Favorites.vue"),
    },
  ],
});

export default router;
