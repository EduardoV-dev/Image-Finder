import PropTypes from 'prop-types';
import { useState } from 'react';
import { animated } from 'react-spring';

import { Spinner } from '../';
import styles from './image.module.scss';

const Image = ({ className, style, onLoad, noSpinner, ...rest }) => {
    /* --- Hooks --- */

    const [hasLoaded, setHasLoaded] = useState(false);

    /* --- Handlers --- */

    const handleLoad = () => {
        setHasLoaded(true);
        onLoad(true);
    };

    return (
        <animated.figure
            className={`${styles.image} ${
                hasLoaded && styles.loaded
            } ${className}`}
        >
            <img {...rest} alt={rest.alt} onLoad={handleLoad} />

            {!noSpinner && <Spinner loaded={hasLoaded} />}
        </animated.figure>
    );
};

Image.propTypes = {
    alt: PropTypes.string,
    className: PropTypes.string,
    noSpinner: PropTypes.bool,
    src: PropTypes.string.isRequired,
    style: PropTypes.object,

    onLoad: PropTypes.func,
};

Image.defaultProps = {
    alt: '',
    className: '',
    noSpinner: false,
    style: {},

    onLoad: () => {},
};

export default Image;
