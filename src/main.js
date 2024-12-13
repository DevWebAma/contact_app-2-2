import "./assets/styles.css";

import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import { useContactStore } from "./stores/contact";

const app = createApp(App);

app.use(createPinia());

app.mount("#app");

app.config.globalProperties.$nextTick(() => {
  useContactStore().loadContacts();
});
