import { createRouter, createWebHistory } from "vue-router";
import EmAltaVue from "../views/EmAlta.vue";
import FavoriteVue from "../views/Favorite.vue";

const routes = [
    {
        path: "/",
        component: EmAltaVue
    },
    {
        path: "/favorite",
        component: FavoriteVue
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
