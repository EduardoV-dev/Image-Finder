import React from 'react';
import { useTranslation } from 'react-i18next';

import { Header, Navbar } from '@components/layout';
import styles from './home.module.scss';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header className={`d-flex flex-column justify-content-center align-items-center ${styles.header}`}>
        <Navbar 
          className={styles.header__navbar}
        />
        <h1 className="fw-bold mb-3 mb-sm-3 fs-2 text-light text-center">{t('home_title')}</h1>
        <p className="fs-6 text-light text-center">{t('home_subtitle')}
          <a
            className="text-decoration-none px-1 text-light fw-bold"
            href="https://unsplash.com/"
            target="_blank"
            rel="noreferrer noopener"
          >{t('home_subtitle_source')}</a>
        </p>
      </Header>
    </>
  );
}

export default Home;