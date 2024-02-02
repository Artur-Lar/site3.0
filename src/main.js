import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";

const i18nInstance = createI18n({
  locale: "en",
  messages: {
    ru: require("./locales/ru.json"),
    en: require("./locales/en.json"),
    tr: require("./locales/tr.json"),
  },
});

createApp(App).use(router).use(i18nInstance).mount("#app");
