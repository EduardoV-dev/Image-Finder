import React from 'react';
import { config, useSpring } from 'react-spring';

/**
 * Receives a scrollYToRender param for returning the scale animation.
 * Animation will be triggered after passing scrollYToRender param.
 *
 * @param {number} scrollYToRender - window scroll Y.
 * @returns {Object} -
 */
const useShowOnScrollAnimation = (scrollYToRender) => {
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
        const handleScroll = () => setShow(window.scrollY >= scrollYToRender);

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollYToRender]);

    return spring;
};

export default useShowOnScrollAnimation;
