import HttpApi from 'i18next-http-backend';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const initialize = () =>
    i18next
        .use(initReactI18next)
        .use(LanguageDetector)
        .use(HttpApi)
        .init({
            supportedLngs: ['en', 'es'],
            detection: {
                order: [
                    'path',
                    'cookie',
                    'htmlTag',
                    'localStorage',
                    'sessionStorage',
                    'navigator',
                    'querystring',
                    'subdomain',
                ],
                caches: ['cookie'],
            },
            fallbackLng: 'en',
            backend: { loadPath: '/translations/{{lng}}/translation.json' },
        });

export default initialize;
