import React, { useEffect } from 'react';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next, useTranslation } from 'react-i18next';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';

import { AppRouter } from '@routes';
import store from './redux/store';

const client = new QueryClient();

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

const App = () => {
    const { t } = useTranslation();

    /* Updates the document title when the language is changed */

    useEffect(() => {
        document.title = t('html_title');
    }, [t]);

    return (
        <QueryClientProvider {...{ client }}>
            <Provider {...{ store }}>
                <AppRouter />
            </Provider>

            <ToastContainer />
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
};

export default App;
