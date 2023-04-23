import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import XHR from "i18next-http-backend";
import en from "./lang/en.json";
import de from "./lang/de.json";

const resources = {
  en: { translation: en },
  de: { translation: de },
};
i18next
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["de", "en"],
    debug: process.env.NODE_ENV === "development",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });
export default i18next;
