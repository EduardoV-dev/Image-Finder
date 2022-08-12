import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { initializei18Next } from '@lib';
import { AppProvider } from '@providers';
import { AppRouter } from '@routes';

initializei18Next();

const App = () => {
    const { t } = useTranslation();

    /* Updates the document title when the language is changed */
    useEffect(() => {
        document.title = t('html_title');
    }, [t]);

    return (
        <AppProvider>
            <AppRouter />
        </AppProvider>
    );
};

export default App;
