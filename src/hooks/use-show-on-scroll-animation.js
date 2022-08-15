import React from 'react';
import { config, useSpring } from 'react-spring';

/**
 * Receives scrollY and scrollYToRender params for returning the scale animation.
 * Animation will be triggered after scrollY passes scrollYToRender param.
 *
 * @param {Object} config - Hook's configuration object
 * @param {number} config.scrollYToRender - window scroll Y to render the element.
 * @param {number} config.scrollY - window scroll Y
 * @returns {[spring: any, show: boolean]} - spring for animation, show for telling if the scrollYToRender param has been passed or not.
 */
const useShowOnScrollAnimation = ({ scrollY, scrollYToRender }) => {
    /* --- Hooks --- */

    const [show, setShow] = React.useState(false);

    /* --- Animations --- */

    const spring = useSpring({
        opacity: show ? 1 : 0,
        transform: `scale(${show ? 1 : 0.5})`,
        visibility: show ? 'visible' : 'hidden',
        pointerEvents: show ? 'auto' : 'none',

        config: config.gentle,
    });

    React.useEffect(() => {
        setShow(scrollY >= scrollYToRender);
    }, [scrollY, scrollYToRender]);

    return [spring, show];
};

export default useShowOnScrollAnimation;
