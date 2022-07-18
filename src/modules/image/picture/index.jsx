import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { animated, useSpring, config } from 'react-spring';

import { Image } from '@components';
import styles from './picture.module.scss';
import { useState } from 'react';

const Picture = () => {
    /* --- Hooks --- */

    const { photo } = useSelector((state) => state.photo);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

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

    const fadeData = useSpring({
        opacity: isHovering ? 1 : 0,
        y: isHovering ? 0 : -10,

        config: config.gentle,
    });

    /* --- Rendering Fallback --- */

    if (JSON.stringify(photo) === '{}') return <></>;

    /* --- State --- */

    const { alt_description, description, tags, imagesURL } = photo;

    const dataAnimations = {
        ...fadeData,
        ...entranceXSlide,
    };

    /* --- Handlers --- */

    const handleMouseEnter = () => setIsHovering(true);

    const handleMouseLeave = () => setIsHovering(false);

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
