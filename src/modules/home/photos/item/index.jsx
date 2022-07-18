import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import { Card, Image } from '@components';
import styles from './photo.module.scss';

const PhotoItem = ({ image: { id, url, alt, user, likes } }) => {
    /* --- Hooks --- */

    const [isLoaded, setIsLoaded] = useState(false);
    const { t } = useTranslation();

    return (
        <Link to={`/image/${id}`}>
            <Card
                className={`${styles.container} ${
                    isLoaded && styles['image-loaded']
                }`}
            >
                <Image
                    src={url}
                    alt={alt}
                    onLoad={setIsLoaded}
                    className={styles.container__img}
                />

                <div className={styles.container__data}>
                    <p className="text-light">
                        {t('home_likes')}:{' '}
                        <span className="fw-bold text-light">{likes}</span>
                    </p>

                    <Image src={user.photo} alt={user.name} noSpinner />
                </div>
            </Card>
        </Link>
    );
};

export default PhotoItem;
