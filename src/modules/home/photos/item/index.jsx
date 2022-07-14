import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Card, Image, Spinner, Avatar } from '@components';
import { useLoadedImages } from '@hooks';
import styles from './photo.module.scss';

const PhotoItem = ({ image: { id, url, alt, user, likes } }) => {
    /* --- Hooks --- */

    const { t } = useTranslation();
    const { isLoaded, handleLoad } = useLoadedImages();

    return (
        <Link to={`/image/${id}`}>
            <Card
                className={`${styles.container} ${
                    isLoaded && styles['image-loaded']
                }`}
            >
                <figure className={styles.container__img}>
                    <Image src={url} alt={alt} onLoad={handleLoad} />
                </figure>

                <div className={styles.container__data}>
                    <p className="text-light">
                        {t('home_likes')}:{' '}
                        <span className="fw-bold text-light">{likes}</span>
                    </p>
                    <Avatar src={user.photo} alt={user.name} size="32px" />
                </div>

                {!isLoaded && <Spinner />}
            </Card>
        </Link>
    );
};

export default PhotoItem;
