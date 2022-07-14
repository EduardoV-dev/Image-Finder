import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { animated, useSpring, config } from 'react-spring';

import { Image, Spinner, Overlay } from '@components';
import { useLoadedImages } from '@hooks';
import styles from './picture.module.scss';

const Picture = () => {
    /* --- Hooks --- */

    const { photo } = useSelector((state) => state.photo);
    const { isLoaded, handleLoad } = useLoadedImages();

    /* --- Animations --- */

    const entranceXSlide = useSpring({
        from: { opacity: 0, x: -100 },
        to: { opacity: 1, x: 0 },

        pause: !isLoaded,
        config: config.gentle,
    });

    const entranceScale = useSpring({
        from: { opacity: 0, scale: 1.5 },
        to: { opacity: 1, scale: 1 },

        pause: !isLoaded,
        config: config.gentle,
    });

    if (JSON.stringify(photo) === '{}') return <></>;

    /* --- State --- */

    const { alt_description, description, tags, imagesURL } = photo;

    /* --- Components --- */

    const ImageTags = tags.map((tag) => (
        <Link className={styles.category} key={tag} to={`/?query=${tag}`}>
            {tag}
        </Link>
    ));

    const ImageDescription = (
        <animated.div
            className={styles['description-container']}
            style={entranceXSlide}
        >
            <p className="text-white fw-bold">{description}</p>
        </animated.div>
    );

    return (
        <div className="position-relative">
            <div className="position-relative">
                <Image
                    src={imagesURL.full}
                    alt={alt_description}
                    onLoad={handleLoad}
                    style={entranceScale}
                />

                <animated.div
                    className={styles['tags-container']}
                    style={entranceXSlide}
                >
                    {isLoaded && ImageTags}
                </animated.div>

                {isLoaded && description && ImageDescription}
            </div>

            {!isLoaded && (
                <Overlay>
                    <Spinner />
                </Overlay>
            )}
        </div>
    );
};

export default Picture;
