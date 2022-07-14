import { useTranslation } from 'react-i18next';
import { animated, config, useSpring } from 'react-spring';

import { Form as BootForm } from 'react-bootstrap';
import { Card, SearchInputForm } from '@components';
import styles from './form.module.scss';

const Form = () => {
    /* --- Hooks --- */

    const { t } = useTranslation();

    /* --- Animations --- */

    const sectionFormSpring = useSpring({
        from: { opacity: 0, scale: 0 },
        to: { opacity: 1, scale: 1 },

        config: config.gentle,
    });

    return (
        <animated.section className={styles.form}>
            <Card className={styles['form-card']} style={sectionFormSpring}>
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
        </animated.section>
    );
};

export default Form;
