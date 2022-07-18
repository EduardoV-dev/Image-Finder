import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import { useDispatch } from 'react-redux';
import { useLayoutEffect, useRef } from 'react';
import { debounce } from 'debounce';

import arrowImg from '@assets/png/Up_arrow.png';
import Footer from './footer';
import Header, { headerDefaultProps, headerPropTypes } from './header';
import { setScrollY } from '@redux/ui';
import { useShowOnScrollAnimation } from '@hooks';
import styles from './layout.module.scss';

/**
 * After passing this value in the window scrollY, the scroll to top component
 * will be visible, else it will be hidden.
 */
const SCROLLY_TO_RENDER_SCROLL_TO_TOP = 1000;

const Layout = ({ children, className, ...rest }) => {
    /* --- Hooks --- */

    const dispatch = useDispatch();
    const layoutRef = useRef(null);

    /* --- Animations --- */

    const [scaleAnimation] = useShowOnScrollAnimation(
        SCROLLY_TO_RENDER_SCROLL_TO_TOP,
    );

    /* --- Effects --- */

    useLayoutEffect(() => {
        const handleScroll = debounce(
            () => dispatch(setScrollY(layoutRef.current.scrollTop)),
            100,
        );

        layoutRef.current.addEventListener('scroll', handleScroll);

        return () =>
            // eslint-disable-next-line react-hooks/exhaustive-deps
            layoutRef.current.removeEventListener('scroll', handleScroll);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /* --- Handlers --- */

    const scrollTop = () =>
        layoutRef.current.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <div className={styles.app} ref={layoutRef} id="layout">
            <section>
                {/* rest contains header props ({ bgColor, withSearchInput }) */}

                <Header {...rest} />
                <main {...{ className }}>{children}</main>

                {/* ScrollToTop */}

                <animated.button
                    type="button"
                    className={`position-fixed btn ${styles['scroll-to-top']}`}
                    style={scaleAnimation}
                    onClick={scrollTop}
                >
                    <img
                        src={arrowImg}
                        alt="Scroll To Top"
                        className="d-block img-fluid"
                    />
                </animated.button>
            </section>

            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    ...headerPropTypes,
};

Layout.defaultProps = {
    className: '',
    ...headerDefaultProps,
};

export default Layout;
