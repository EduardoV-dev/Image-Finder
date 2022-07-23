import { useState } from 'react';
import { config, useSpring } from 'react-spring';

/**
 * Custom hook to use the hover transition. the transition consist on hovering
 * an element and fading others elements. Use fadeTransition property
 * for animated elements from react-spring, by using the style property.
 *
 * @param {boolean} displayInHover - determines if the element should be displayed on hover or not.
 *
 * @returns {[fadeTransition: any, {
 *   handleMouseEnter: () => void,
 *   handleMouseLeave: () => void
 * }]} - fadeTransition and handlers for hovering
 */
const useHoverTransition = (displayOnHover) => {
    /* --- Hooks --- */

    const [isHovering, setIsHovering] = useState(false);

    /* --- State --- */

    /**
     * When display on hover is true, the element is displayed on hover, else
     * the element is displayed when the mouse is not hovering.
     *
     * @constant {1 | 0} -  animated-opacity
     */
    const opacity = displayOnHover ? (isHovering ? 1 : 0) : isHovering ? 0 : 1;

    /* --- Animations --- */

    const fadeTransition = useSpring({
        opacity,

        config: config.gentle,
    });

    /* --- Handlers --- */

    const handleMouseEnter = () => setIsHovering(true);

    const handleMouseLeave = () => setIsHovering(false);

    return [fadeTransition, { handleMouseEnter, handleMouseLeave }];
};

export default useHoverTransition;
