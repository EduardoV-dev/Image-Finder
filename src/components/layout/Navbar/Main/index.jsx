import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import logoPath from '@images/logo.png';
import LangSelector from '../LangSelector';

const Navbar = ({ className = '', children }) => {
  const { t } = useTranslation();
  const { search } = useLocation();

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-primary w-100 ${className}`}
      style={{ minHeight: '70px' }}
    >
      <div className="container">
        <Link className="navbar-brand" to={`/${search ? search : ''}`}>
          <img
            src={logoPath}
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          <span className="ms-2">{t('html_title')}</span>
        </Link>
        <button
          className="navbar-toggler btn-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {children}
          </ul>
          <div className="d-flex">
            <LangSelector />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;