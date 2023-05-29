import { createPinia } from "pinia";
import { useFavoriteStore } from "./favorite";
import { useModalStore } from "./modal";
import { useEmAltaStore } from "./em-alta";

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

const emAltaStore = {
    install: (app: App) => {
        app.provide("emAltaStore", useEmAltaStore());
    }
};

export function setupPinia(app: App<Element>) {
    app.use(favoriteStore);
    app.use(modalStore);
    app.use(emAltaStore);

    app.use(pinia);
}
