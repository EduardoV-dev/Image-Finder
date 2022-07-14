import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Avatar, Card, Overlay, Spinner } from '@components';
import { useLoadedImages } from '@hooks';
import { config, useSpring } from 'react-spring';

const Data = () => {
    /* --- Hooks --- */

    const { t } = useTranslation();
    const { isLoaded, handleLoad } = useLoadedImages();
    const { name, profile_image } = useSelector((state) => state.photo.user);

    /* --- Animations --- */

    const entranceScale = useSpring({
        from: { opacity: 0, scale: 0 },
        to: { opacity: 1, scale: 1 },

        config: config.gentle,
        pause: !isLoaded,
    });

    if (!name || !profile_image) return <></>;

    return (
        <Card className="p-5 container" style={entranceScale}>
            <p className="text-light text-center mb-3">
                {t('image_uploaded_by')}:{' '}
            </p>
            <div className="d-flex flex-wrap align-items-center mx-auto">
                <Avatar
                    size="64px"
                    src={profile_image}
                    alt=""
                    onLoad={handleLoad}
                />
                <span className="text-light ms-3">{name}</span>
            </div>
            {!isLoaded && (
                <Overlay>
                    <Spinner />
                </Overlay>
            )}
        </Card>
    );
};

export default Data;
