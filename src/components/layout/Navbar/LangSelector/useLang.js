import i18next from 'i18next';
import cookies from 'js-cookie';

const useLang = () => {
  const currentLanguageCode = cookies.get('i18next') || 'en';

  const handleLangChange = (langCode) =>
    i18next.changeLanguage(langCode);

  return {
    currentLanguageCode,
    handleLangChange,
  };
}

export default useLang;