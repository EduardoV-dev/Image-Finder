import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Card, Image, Spinner, Overlay, Avatar } from '@components';
import { useLoadedImages } from '@hooks';
import styles from './photo.module.scss';

const PhotoItem = ({ image }) => {
    const { t } = useTranslation();
    const { isLoaded, handleLoad } = useLoadedImages();
    const {
        id,
        url,
        alt,
        user: { name, photo },
        likes,
    } = image;

    return (
        <Link to={`/image/${id}`}>
            <Card className="position-relative mb-2 overflow-hidden border-0 overlay">
                <Image
                    src={url}
                    alt={alt}
                    className={`d-block position-relative rounded mx-100 ${styles.container__img}`}
                    onLoad={handleLoad}
                />
                <div className="px-3 pb-3 bottom-0 left-0 d-flex flex-wrap justify-content-between align-items-center overlay-child">
                    <p className="text-light">
                        {t('home_likes')}:{' '}
                        <span className="fw-bold text-light">{likes}</span>
                    </p>
                    <Avatar src={photo} alt={name} size="32px" />
                </div>
                {!isLoaded && (
                    <Overlay>
                        <Spinner />
                    </Overlay>
                )}
            </Card>
        </Link>
    );
};

export default PhotoItem;
