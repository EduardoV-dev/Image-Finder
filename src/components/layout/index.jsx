import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { debounce } from 'debounce';

import arrowImg from '@assets/png/Up_arrow.png';
import Footer from './footer';
import Header, { headerDefaultProps, headerPropTypes } from './header';
import { useShowOnScrollAnimation } from '@hooks';
import { setScrollY } from '@store/ui';
import styles from './layout.module.scss';

/**
 * After passing this value in the window scrollY, the scroll to top component
 * will be visible, else it will be hidden.
 */
const SCROLLY_TO_RENDER_SCROLL_TO_TOP = 1000;

/**
 * This component is responsible for the layout of the app, it renders a scroll to top component when
 * the user scrolls down the page and reaches 1000.
 */
const Layout = ({ children, className, ...rest }) => {
    /* --- Hooks --- */

    const dispatch = useDispatch();

    /* --- Animations --- */

    const [scaleAnimation] = useShowOnScrollAnimation(
        SCROLLY_TO_RENDER_SCROLL_TO_TOP,
    );

    /* --- Effects --- */

    useEffect(() => {
        const handleScroll = debounce(
            () => dispatch(setScrollY(window.scrollY)),
            200,
        );

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /* --- Handlers --- */

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <>
            <section className={styles.content}>
                {/* rest contains header props ({ bgColor, withSearchInput }) */}

                <Header {...rest} />
                <main {...{ className }}>{children}</main>

                {/* ScrollToTop */}

                <animated.button
                    type="button"
                    className={`position-fixed btn ${styles['scroll-to-top']}`}
                    style={scaleAnimation}
                    onClick={scrollToTop}
                >
                    <img
                        src={arrowImg}
                        alt="Scroll To Top"
                        className="d-block img-fluid"
                    />
                </animated.button>
            </section>

            <Footer className={styles.footer} />
        </>
    );
};

Layout.propTypes = {
    /** Content inside the layout as JSX Elements */
    children: PropTypes.node.isRequired,
    /** Layout class name for children container */
    className: PropTypes.string,
    /**
     * Header background color, if bgColor is equals to 'dark' will add a on scroll
     * transition to the background color from 'sky blue' to 'dark.
     */
    bgColor: headerPropTypes.bgColor,
    /**
     * 'animated-on-scroll' will add a scroll animation on header when bgColor is equals to 'dark',
     * otherwise it will not add any animation.
     */
    searchInputType: headerPropTypes.searchInputType,
};

Layout.defaultProps = {
    className: '',
    ...headerDefaultProps,
};

export default Layout;
