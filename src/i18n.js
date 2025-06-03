// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationUz from './locales/uz.json';
import translationEn from './locales/en.json';
import translationRu from './locales/ru.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      uz: { translation: translationUz },
      en: { translation: translationEn },
      ru: { translation: translationRu },
    },
    fallbackLng: 'uz',
    interpolation: { escapeValue: false },
  });

export default i18n;
