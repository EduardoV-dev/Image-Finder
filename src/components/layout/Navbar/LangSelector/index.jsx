import { useTranslation } from 'react-i18next';
import { languages } from '@consts/langs';

import englishLangPath from '@images/English.png';
import spanishLangPath from '@images/Spanish.png';
import styles from './lang.module.scss';
import useLang from './useLang';

const LangSelector = ({ className }) => {
  const { t } = useTranslation();
  const {
    currentLanguageCode,
    handleLangChange
  } = useLang();

  return (
    <div className={`dropdown ${className}`}>
      <button
        className="btn btn-dark dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
      >
        <span
          className="me-2"
        >{t('language')}</span>
        <img
          src={currentLanguageCode === 'en' ? englishLangPath : spanishLangPath}
          className={styles.img}
          alt={currentLanguageCode}
        />
      </button>
      <ul className="dropdown-menu dropdown-menu-dark">
        {languages.map(({ code, name, flag_code }, idx) => (
          <li key={idx}>
            <button
              className={`dropdown-item ${code === currentLanguageCode && 'active'}`}
              onClick={() => handleLangChange(code)}
              disabled={code === currentLanguageCode && 'text-muted'}
            >
              <span
                className={`flag-icon flag-icon-${flag_code} mx-2`}
                style={{ opacity: code === currentLanguageCode && 0.5 }}
              />
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LangSelector;