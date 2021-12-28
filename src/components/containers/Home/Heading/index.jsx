import { useTranslation } from 'react-i18next';

import { Navbar } from '@components/layout';

const Heading = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar
        className="mb-5"
      />
      <h1 className="fw-bold mb-3 mb-sm-3 fs-2 text-light text-center">{t('home_title')}</h1>
      <p className="fs-6 text-light text-center mb-5">{t('home_subtitle')}
        <a
          className="text-decoration-none px-1 text-light fw-bold"
          href="https://unsplash.com/"
          target="_blank"
          rel="noreferrer noopener"
        >{t('home_subtitle_source')}</a>
      </p>
    </>
  );
}

export default Heading;