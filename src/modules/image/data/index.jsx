import { useState } from 'react';
import { config, useSpring } from 'react-spring';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Card, Image } from '@components';

const Data = () => {
    /* --- Hooks --- */

    const { t } = useTranslation();
    const [isLoaded, setIsLoaded] = useState(false);
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
        <Card className="p-5" style={entranceScale}>
            <p className="text-light text-center mb-3">
                {t('image_uploaded_by')}:{' '}
            </p>

            <div className="d-flex flex-wrap align-items-center mx-auto">
                <Image src={profile_image} alt={name} onLoad={setIsLoaded} />
                <span className="text-light ms-3">{name}</span>
            </div>
        </Card>
    );
};

export default Data;
