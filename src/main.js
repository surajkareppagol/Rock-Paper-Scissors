import { createApp } from "vue";

import App from "./App.vue";
import SignCard from "./components/SignCard.vue";

const app = createApp(App);

app.component("sign-card", SignCard);
app.mount("#app");
