import { useState } from 'react';
import { Link } from 'react-router-dom';
import { animated, useSpring, config } from 'react-spring';

import { useAppSelector } from '@store';
import { Image } from '@components';
import { useHoverTransition } from '@hooks';
import { selectPictureData } from '../../store';
import styles from './picture.module.scss';

const Picture = () => {
    /* --- Hooks --- */

    const pictureData = useAppSelector(selectPictureData);
    const [hoverTransition, { hoverOn, hoverOff }] = useHoverTransition(true);
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

    if (JSON.stringify(pictureData) === '{}') return <></>;

    /* --- State --- */

    const { alt_description, description, tags, imageURL } = pictureData;

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
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
        >
            <Image
                src={imageURL}
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
