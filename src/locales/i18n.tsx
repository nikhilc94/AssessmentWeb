import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import ar from "./ar.json";
import hi from "./hi.json";

const resources = {
  en: { translation: en },
  ar: { translation: ar },
  hi: { translation: hi },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
});

export default i18n;
