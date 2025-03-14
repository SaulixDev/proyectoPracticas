import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import cockTailView from "../views/CocktailsView.vue"
import menuView from "../views/MenuView.vue"
import menuIdView from "../components/MealDetails.vue"
import favoritesView from "../views/Favorites.vue"
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
      component: cockTailView,
    },
    {
      path: "/cocktails/:category",
      name: "cocktaillist",
      component: () => import("../components/CocktailList.vue"),
      props: true,
    },
    {
      path: "/Menus",
      name: "menus",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: menuView,
    },
    {
      path: "/Menus/:id",
      name: "meal-details",
      component: menuIdView,
      props: true,
    },
    {
      path: "/Favorites",
      name: "Favorites",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: favoritesView,
    },
  ],
});

export default router;
