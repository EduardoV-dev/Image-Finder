import { animated } from 'react-spring';

import arrowPath from '@images/Up_arrow.png';
import { useShowOnScrollAnimation } from '@hooks';
import styles from './scrollTop.module.scss';

/**
 * After passing this value in the window scrollY, the scroll to top component
 * will be visible, else it will be hidden.
 */
const SCROLLY_TO_RENDER_SCROLL_TO_TOP = 1000;

const style = {
    img: {
        width: '64px',
        height: '64px',
        objectFit: 'cover',
    },
};

const ScrollToTop = () => {
    const spring = useShowOnScrollAnimation(SCROLLY_TO_RENDER_SCROLL_TO_TOP);

    const scrollTop = () => window.scrollTo({ top: 0 });

    return (
        <>
            <animated.button
                type="button"
                className={`position-fixed btn ${styles.btn}`}
                style={spring}
                onClick={scrollTop}
            >
                <img
                    src={arrowPath}
                    alt=""
                    className="d-block img-fluid"
                    style={style.img}
                />
            </animated.button>
        </>
    );
};

export default ScrollToTop;
