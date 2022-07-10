import { useTranslation } from 'react-i18next';

import { Form as BootForm } from 'react-bootstrap';
import { Card, SearchInputForm } from '@components';
import styles from './form.module.scss';

const Form = () => {
    /* --- Hooks --- */

    const { t } = useTranslation();

    return (
        <section className={`position-relative w-100 ${styles.form}`}>
            <Card
                className={`d-md-flex flex-md-row py-5 px-3 mx-auto p-md-5 ${styles.formCard}`}
            >
                <BootForm.Group className="w-100">
                    <BootForm.Label
                        htmlFor="form-search"
                        className="text-white"
                    >
                        {t('home_search_label')}
                    </BootForm.Label>

                    <SearchInputForm id="form-search" />
                </BootForm.Group>
            </Card>
        </section>
    );
};

export default Form;
