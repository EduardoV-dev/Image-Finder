import PropTypes from 'prop-types';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { animated, config, useSpring } from 'react-spring';
import { useSelector } from 'react-redux';

import { SearchInputForm } from '@features/image-gallery';
import { useShowOnScrollAnimation } from '@hooks';
import * as constants from './constants';
import logoPath from '@assets/png/logo.png';
import LanguageSelector from './language-selector';

const Header = ({ bgColor, searchInputType }) => {
    /* --- Hooks --- */

    const scrollY = useSelector((state) => state.ui.scrollY);
    const { t } = useTranslation();
    const { search } = useLocation();

    /* --- Animations --- */

    const [searchInputScale, doPassedScrollYToRender] =
        useShowOnScrollAnimation({
            scrollY,
            scrollYToRender: constants.SCROLLY_TO_RENDER_SEARCH_INPUT,
        });

    /** Transition will be applied if bgColor prop is dark */

    const bgTransitionSpring = useSpring({
        backgroundColor:
            scrollY >= constants.SCROLLY_TO_CHANGE_BG_COLOR
                ? constants.DARK_BG_COLOR
                : constants.SKY_BLUE_BG_COLOR,

        config: config.gentle,
    });

    /* --- Components --- */

    const SearchInput = <SearchInputForm />;

    const AnimatedSearchInput = (
        <animated.div style={searchInputScale}>{SearchInput}</animated.div>
    );

    return (
        <animated.header
            className={`w-100 position-sticky top-0 ${
                bgColor === 'sky-blue' && 'bg-info'
            }`}
            style={{ zIndex: 10, ...bgTransitionSpring }}
        >
            <Navbar expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link className="navbar-brand" to={`/${search ?? ''}`}>
                            <img
                                src={logoPath}
                                alt=""
                                width="30"
                                height="24"
                                className="d-inline-block align-text-top"
                            />
                            <span className="ms-2">{t('html_title')}</span>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar" />
                    <Navbar.Collapse id="navbar">
                        <Nav className="me-auto my-2 my-lg-0">
                            {searchInputType === 'not-animated' && SearchInput}

                            {searchInputType === 'animated-on-scroll' &&
                                doPassedScrollYToRender &&
                                AnimatedSearchInput}
                        </Nav>

                        <div className="d-flex">
                            <LanguageSelector />
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </animated.header>
    );
};

export const headerPropTypes = {
    bgColor: PropTypes.oneOf(['dark', 'sky-blue']),
    searchInputType: PropTypes.oneOf(['animated-on-scroll', 'not-animated']),
};

export const headerDefaultProps = {
    bgColor: 'dark',
    searchInputType: 'not-animated',
};

Header.propTypes = headerPropTypes;
Header.defaultProps = headerDefaultProps;

export default Header;
