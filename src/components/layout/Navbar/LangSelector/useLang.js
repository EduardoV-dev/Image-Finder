import i18next from 'i18next';
import cookies from 'js-cookie';
import { useLocation, useNavigate } from "react-router-dom";

import { replaceWord } from '@utils/data';

const useLang = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const currentLanguageCode = cookies.get('i18next') || 'en';

  const handleLangChange = (langCode) => {
    i18next.changeLanguage(langCode);
    const newPath = replaceWord(pathname, currentLanguageCode, langCode);
    navigate(newPath);
  }

  return {
    currentLanguageCode,
    handleLangChange,
  };
}

export default useLang;