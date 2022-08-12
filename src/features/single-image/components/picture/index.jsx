import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { animated, useSpring, config } from 'react-spring';

import { Image } from '@components';
import { useHoverTransition } from '@hooks';
import styles from './picture.module.scss';

const Picture = () => {
    /* --- Hooks --- */

    const { data } = useSelector((state) => state.picture);
    const [hoverTransition, { handleMouseEnter, handleMouseLeave }] =
        useHoverTransition(true);

    const [isLoaded, setIsLoaded] = useState(false);

    /* --- Animations --- */

    const entranceXSlide = useSpring({
        from: { x: -100 },
        to: { x: 0 },

        pause: !isLoaded,
        config: config.gentle,
    });

    const entranceScale = useSpring({
        from: { opacity: 0, scale: 1.5 },
        to: { opacity: 1, scale: 1 },

        pause: !isLoaded,
        config: config.gentle,
    });

    /* --- Conditional Rendering --- */

    if (JSON.stringify(data) === '{}') return <></>;

    /* --- State --- */

    const { alt_description, description, tags, imagesURL } = data;

    const dataAnimations = {
        ...hoverTransition,
        ...entranceXSlide,
    };

    /* --- Components --- */

    const ImageTags = tags.map((tag) => (
        <Link className={styles.category} key={tag} to={`/?query=${tag}`}>
            {tag}
        </Link>
    ));

    const ImageDescription = (
        <animated.div
            className={styles['description-container']}
            style={dataAnimations}
        >
            <p className="text-white fw-bold">{description}</p>
        </animated.div>
    );

    return (
        <section
            className="position-relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Image
                src={imagesURL.full}
                alt={alt_description}
                onLoad={setIsLoaded}
                style={entranceScale}
            />

            <animated.div
                className={styles['tags-container']}
                style={dataAnimations}
            >
                {isLoaded && ImageTags}
            </animated.div>

            {isLoaded && description && ImageDescription}
        </section>
    );
};

export default Picture;
