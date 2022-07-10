import { animated } from 'react-spring';

import arrowPath from '@images/Up_arrow.png';
import { useShowOnScrollAnimation } from '@hooks';
import styles from './scrollTop.module.scss';

/**
 * After passing this value in the window scrollY, the scroll to top component
 * will be visible, else it will be hidden.
 */
const SCROLLY_TO_RENDER_SCROLL_TO_TOP = 1000;

const ScrollToTop = () => {
    /* --- Hooks --- */

    const [scaleAnimation] = useShowOnScrollAnimation(
        SCROLLY_TO_RENDER_SCROLL_TO_TOP,
    );

    /* --- Handlers --- */

    const scrollTop = () => window.scrollTo({ top: 0 });

    return (
        <>
            <animated.button
                type="button"
                className={`position-fixed btn ${styles.btn}`}
                style={scaleAnimation}
                onClick={scrollTop}
            >
                <img
                    src={arrowPath}
                    alt="Scroll To Top"
                    className="d-block img-fluid"
                />
            </animated.button>
        </>
    );
};

export default ScrollToTop;
