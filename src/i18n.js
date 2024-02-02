import { createI18n } from "vue-i18n";
import ru from "./locales/ru.json";
import en from "./locales/en.json";
import tr from "./locales/tr.json";

const i18n = createI18n({
  locale: "ru",
  messages: {
    ru,
    en,
    tr,
  },
});

export default i18n;
