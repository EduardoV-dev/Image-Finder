import { useState } from 'react';
import { config, useSpring } from 'react-spring';
import { useTranslation } from 'react-i18next';

import { Card, Image } from '@components';
import { useAppSelector } from '@store';
import { selectPictureUser } from '../../store';

const UserInfo = () => {
    /* --- Hooks --- */

    const { t } = useTranslation();
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const user = useAppSelector(selectPictureUser);

    /* --- Animations --- */

    const entranceScale = useSpring({
        from: { opacity: 0, scale: 0 },
        to: { opacity: 1, scale: 1 },

        config: config.gentle,
        pause: !isImageLoaded,
    });

    if (JSON.stringify(user) === '{}') return <></>;

    /* --- State --- */

    const { name, profile_image } = user;

    return (
        <Card className="p-5" style={entranceScale}>
            <p className="text-light text-center mb-3">
                {t('image_uploaded_by')}:{' '}
            </p>

            <div className="d-flex flex-wrap align-items-center mx-auto">
                <Image
                    src={profile_image}
                    alt={name}
                    onLoad={setIsImageLoaded}
                />
                <span className="text-light ms-3">{name}</span>
            </div>
        </Card>
    );
};

export default UserInfo;
