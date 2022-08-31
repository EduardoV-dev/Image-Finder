import i18next from 'i18next';
import cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'react-bootstrap';

import englishLangImg from '@assets/png/English.png';
import spanishLangImg from '@assets/png/Spanish.png';

const LANGUAGES = [
    {
        code: 'es',
        name: 'Español',
        flag_code: 'es',
    },
    {
        code: 'en',
        name: 'English',
        flag_code: 'gb',
    },
];

const LangSelector = () => {
    /* --- Hooks --- */

    const { t } = useTranslation();

    /* --- State --- */

    const currentLanguageCode = cookies.get('i18next') || 'en';

    /* --- Handlers --- */

    const handleLangChange = (langCode) => i18next.changeLanguage(langCode);

    /* --- Components --- */

    const LangItems = LANGUAGES.map(({ code, name, flag_code }) => (
        <Dropdown.Item
            key={code + name}
            onClick={() => handleLangChange(code)}
            disabled={code === currentLanguageCode}
        >
            <span
                className={`flag-icon flag-icon-${flag_code} mx-2`}
                style={{
                    opacity: code === currentLanguageCode && 0.5,
                }}
            />
            {name}
        </Dropdown.Item>
    ));

    return (
        <Dropdown>
            <Dropdown.Toggle variant="dark">
                <span className="me-2">{t('language')}</span>
                <img
                    style={{ width: '32px' }}
                    src={
                        currentLanguageCode === 'en'
                            ? englishLangImg
                            : spanishLangImg
                    }
                    alt={currentLanguageCode}
                />
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">{LangItems}</Dropdown.Menu>
        </Dropdown>
    );
};

export default LangSelector;
