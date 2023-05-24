import { createApp } from "vue";
import "./style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import store from "./store.d";
import axios from "axios";
import vueAxios from "vue-axios";

import {
    faStar,
    faMagnifyingGlass,
    faXmark,
    faBars,
    faGrip
} from "@fortawesome/free-solid-svg-icons";
library.add(faStar, faMagnifyingGlass, faXmark, faBars, faGrip);

const app = createApp(App);

app.use(store, vueAxios, axios);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.mount("#app");
