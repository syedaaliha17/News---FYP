import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./data/languages/en.json";
import es from "./data/languages/es.json";

i18n.use(initReactI18next).init({
  resources: {
    "en-US": {
      translation: en,
    },
    es: {
      translation: es,
    },
    // ur: {
    //   translation: ur,
    // },
  },
  lng: "en-US",
  fallbackLng: "en-US",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
