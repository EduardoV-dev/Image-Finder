import PropTypes from 'prop-types';
import { useState } from 'react';
import { animated } from 'react-spring';

import { Spinner } from '../';
import styles from './image.module.scss';

/**
 * It's a custom image component that contains its own state management, when the
 * image is not loaded, a spinner is shown in the middle of the space where is supposed
 * to be the image.
 */
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
    /** Fallback text if src is not loaded correctly */
    alt: PropTypes.string,
    /** ClassName for styling the component */
    className: PropTypes.string,
    /**
     * If false, the spinner while loading the image won't be displayed, otherwise,
     * will be displayed.
     */
    noSpinner: PropTypes.bool,
    /** Source of the image */
    src: PropTypes.string.isRequired,
    /** It's intended for adding an animation by using react-spring's style */
    style: PropTypes.object,

    /** Function that returns the loading state of the image (loaded - true, not loaded - false)  */
    onLoad: PropTypes.func,
};

Image.defaultProps = {
    alt: '',
    className: '',
    noSpinner: false,
    style: {},

    onLoad: (loaded) => {},
};

export default Image;
