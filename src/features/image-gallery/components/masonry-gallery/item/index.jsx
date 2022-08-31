import { animated } from 'react-spring';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Card, Image } from '@components';
import { useHoverTransition } from '@hooks';
import styles from './photo.module.scss';

const PhotoItem = ({ image: { id, url, alt, user, likes } }) => {
    /* --- Hooks --- */

    const { t } = useTranslation();
    const [hoverTransition, { hoverOn, hoverOff }] = useHoverTransition(false);

    const [isLoaded, setIsLoaded] = useState(false);

    /* --- State --- */

    const formattedLikes = Intl.NumberFormat('en-US').format(likes);

    return (
        <Link to={`/image/${id}`}>
            <Card
                className={`${styles.container} ${
                    isLoaded && styles['image-loaded']
                }`}
                onMouseEnter={hoverOn}
                onMouseLeave={hoverOff}
            >
                <Image
                    src={url}
                    alt={alt}
                    onLoad={setIsLoaded}
                    className={styles.container__img}
                />

                {isLoaded && (
                    <animated.div
                        className={styles.container__data}
                        style={hoverTransition}
                    >
                        <p className="text-light">
                            {t('home_likes')}:{' '}
                            <span className="fw-bold text-light">
                                {formattedLikes}
                            </span>
                        </p>

                        <Image src={user.photo} alt={user.name} noSpinner />
                    </animated.div>
                )}
            </Card>
        </Link>
    );
};

export default PhotoItem;
