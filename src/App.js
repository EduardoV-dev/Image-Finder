import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import initialize from '@lib/i18next';
import { AppProvider } from '@providers';
import { AppRouter } from '@routes';

// Initializes i18next
initialize();

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
