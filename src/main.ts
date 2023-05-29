import { createApp } from "vue";
import "./style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import router from "./router";
import { pinia } from "./store/pinia-setup";

import {
    faStar,
    faMagnifyingGlass,
    faXmark,
    faBars,
    faGrip
} from "@fortawesome/free-solid-svg-icons";

library.add(faStar, faMagnifyingGlass, faXmark, faBars, faGrip);

const app = createApp(App);

app.use(pinia);

app.use(router);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.mount("#app");
