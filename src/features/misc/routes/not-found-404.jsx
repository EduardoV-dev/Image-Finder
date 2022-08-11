import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { ResultSign, Layout } from '@components';
import { ReactComponent as NotFoundIcon } from '@assets/svg/404.svg';
import { Button } from 'react-bootstrap';

const NotFound404 = () => {
    /* --- Hooks --- */

    const { t } = useTranslation();

    return (
        <Layout>
            <ResultSign illustration={<NotFoundIcon />}>
                {t('404_not_found')}
            </ResultSign>

            <Link
                to={`/?query=${t('404_query')}`}
                className="d-flex justify-content-center mt-4 text-decoration-none"
            >
                <Button variant="info" className="fw-bold">
                    {t('404_link')}
                </Button>
            </Link>
        </Layout>
    );
};

export default NotFound404;
