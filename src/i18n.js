// i18n.js

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from "../public/locales/en.json"
import es from "../public/locales/es.json"

i18next.use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en,
            },
            es: {
                translation: es,
            },
        },
        lng: localStorage.getItem("lng")||'en', // Establece el idioma inicial
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18next;
