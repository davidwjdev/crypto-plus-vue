import { createPinia } from "pinia";
import { useFavoriteStore } from "./favorite";
import { useModalStore } from "./modal";
import { useTopCoinStore } from "./top-coin";
import { useSearchStore } from "./search";
import { useCoinDetailStore } from "./coin-detail";

import { App } from "vue";

export const pinia = createPinia();

const favoriteStore = {
    install: (app: App) => {
        app.provide("favoriteStore", useFavoriteStore());
    }
};
const modalStore = {
    install: (app: App) => {
        app.provide("modalStore", useModalStore());
    }
};

const topCoinStore = {
    install: (app: App) => {
        app.provide("topCoinStore", useTopCoinStore());
    }
};

const searchStore = {
    install: (app: App) => {
        app.provide("searchStore", useSearchStore());
    }
};

const coinDetailStore = {
    install: (app: App) => {
        app.provide("coinDetailStore", useCoinDetailStore());
    }
};

export function setupPinia(app: App<Element>) {
    app.use(favoriteStore);
    app.use(modalStore);
    app.use(topCoinStore);
    app.use(searchStore);
    app.use(coinDetailStore);

    app.use(pinia);
}
