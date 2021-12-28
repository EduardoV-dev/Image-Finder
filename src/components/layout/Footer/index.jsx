import { Card } from '@components/commons';
import { useTranslation } from 'react-i18next';
import { getCurrentYear } from '@utils/date';

const Footer = ({ className }) => {
  const { t } = useTranslation();

  return (
    <Card className={`rounded-0 border-0 p-4 ${className}`}>
      <h3
        className="fs-6 fw-bold text-light mb-0 text-end"
      >{t('footer_createdBy')} | &copy; {t('footer_rights')} {getCurrentYear()}</h3>
    </Card>
  );
}

export default Footer;