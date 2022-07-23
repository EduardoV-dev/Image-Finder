import React from 'react';
import { useSelector } from 'react-redux';
import { config, useSpring } from 'react-spring';

/**
 * Receives a scrollYToRender param for returning the scale animation.
 * Animation will be triggered after passing scrollYToRender param.
 *
 * @param {number} scrollYToRender - window scroll Y.
 * @returns {[spring: any, show: boolean]} - spring for animation, show for telling if the scrollYToRender param has been passed or not.
 */
const useShowOnScrollAnimation = (scrollYToRender) => {
    /* --- Hooks --- */

    const scrollY = useSelector((state) => state.ui.scrollY);
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
