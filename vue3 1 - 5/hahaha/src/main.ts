import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import vImg from "./components/vImg.vue";
import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("vImg", vImg);

app.mount("#app");
