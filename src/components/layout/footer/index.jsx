import { useTranslation } from 'react-i18next';

const Footer = ({ className }) => {
    /* --- Hooks --- */

    const { t } = useTranslation();

    /* --- State --- */

    const currentYear = new Date().getFullYear();

    return (
        <footer className={`rounded-0 bg-secondary border-0 p-4 ${className}`}>
            <h3 className="fs-6 fw-bold text-light mb-0 text-center text-md-end">
                {t('footer_createdBy')} | &copy; {t('footer_rights')}{' '}
                {currentYear}
            </h3>
        </footer>
    );
};

export default Footer;
