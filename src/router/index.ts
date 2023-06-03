import { createRouter, createWebHistory } from "vue-router";
import TopCoinVue from "../views/TopCoin.vue";
import FavoriteVue from "../views/Favorite.vue";
import CoinDetailVue from "../views/CoinDetail.vue";

const routes = [
    {
        path: "/",
        redirect: "/em-alta"
    },
    {
        path: "/em-alta",
        component: TopCoinVue
    },
    {
        path: "/favorite",
        component: FavoriteVue
    },
    {
        path: "/coin/:id",
        component: CoinDetailVue,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
