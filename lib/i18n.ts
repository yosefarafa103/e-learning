import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import arLang from "@/public/lang/ar.json";
import enLang from "@/public/lang/en.json";
const resources = {
  en: {
    translation: enLang,
  },
  ar: {
    translation: arLang,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ar",
});

export default i18n;
