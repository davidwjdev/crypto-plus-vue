import { createApp } from "vue";
import "./style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import store from "./store.d";

import {
    faStar,
    faMagnifyingGlass,
    faXmark
} from "@fortawesome/free-solid-svg-icons";
library.add(faStar, faMagnifyingGlass, faXmark);

const app = createApp(App);
app.use(store);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.mount("#app");
