import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ChainedBackend from 'i18next-chained-backend';
import HttpBackend from 'i18next-http-backend';
import LocalStorageBackend from 'i18next-localstorage-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(ChainedBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    backends: [LocalStorageBackend, HttpBackend],
    backendOptions: [{
        expirationTime: 7 * 24 * 60 * 60 * 1000 // 7 days
      }, {
        loadPath: '/public/locales/{{lng}}/translations.json'
      }],
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
