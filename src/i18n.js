// i18n.js (أو i18n.ts)
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import ar from "./locales/ar/translation.json";

i18n
  .use(LanguageDetector) // detect browser language
  .use(initReactI18next) // connect with React
  .init({
    resources: { en: { translation: en }, ar: { translation: ar } },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    // أهم سطرين:
    react: { useSuspense: false },
    returnObjects: true,
    // (اختياري) لو لا تزال عندك مفاتيح فيها نقاط وتبغى تقراها حرفياً:
    // keySeparator: false,
    // nsSeparator: false,

    // ✅ إضافات فقط لمنع مشاكل iOS القديمة (بدون تغيير سلوكك الحالي):
    load: "languageOnly",          // يحول en-US -> en و ar-SA -> ar
    supportedLngs: ["en", "ar"],   // يقيّد اللغات المدعومة
    cleanCode: true,               // يطبّع كود اللغة لحروف صغيرة
  });

// ✅ ثبّت اتجاه الصفحة والـ lang على مستوى <html> (يفيد RTL على iOS)
const applyDir = (lng) => {
  const dir = i18n.dir(lng);
  document.documentElement.setAttribute("dir", dir);
  document.documentElement.setAttribute("lang", lng);
};
applyDir(i18n.language);
i18n.on("languageChanged", applyDir);

export default i18n;
