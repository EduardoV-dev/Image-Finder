import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import { Container, Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import logoPath from '@images/logo.png';
import LanguageSelector from './language-selector';
import { SearchInputForm } from '@components';
import { useShowOnScrollAnimation } from '@hooks';

/**
 * After passing this value in the window scrollY, the navbar will be visible.
 * Else it will be hidden.
 */
const SCROLLY_TO_RENDER_SEARCH_INPUT = 400;

const Header = ({ bgColor, searchInputType }) => {
    /* --- Hooks --- */

    const { t } = useTranslation();
    const { search } = useLocation();
    const spring = useShowOnScrollAnimation(SCROLLY_TO_RENDER_SEARCH_INPUT);

    /* --- State --- */

    const bgClass = bgColor === 'dark' ? 'bg-primary' : 'bg-info';

    /* --- Components --- */

    const SearchInput = <SearchInputForm id="header-search-form" />;

    const AnimatedSearchInput = (
        <animated.div style={spring}>{SearchInput}</animated.div>
    );

    return (
        <header
            className={`w-100 position-sticky top-0`}
            style={{ zIndex: 10 }}
        >
            <Navbar className={bgClass} variant="dark" expand="md">
                <Container>
                    <Link
                        className="navbar-brand"
                        to={`/${search ? search : ''}`}
                    >
                        <Navbar.Brand>
                            <img
                                src={logoPath}
                                alt=""
                                width="30"
                                height="24"
                                className="d-inline-block align-text-top"
                            />
                            <span className="ms-2">{t('html_title')}</span>
                        </Navbar.Brand>
                    </Link>

                    <Navbar.Toggle aria-controls="menu" />

                    <Navbar.Collapse
                        className="d-flex justify-content-between"
                        id="menu"
                    >
                        {searchInputType === 'not-animated' && SearchInput}

                        {searchInputType === 'animated-on-scroll' &&
                            AnimatedSearchInput}

                        <LanguageSelector />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export const headerPropTypes = {
    bgColor: PropTypes.oneOf(['dark', 'sky-blue']).isRequired,
    searchInputType: PropTypes.oneOf(['animated-on-scroll', 'not-animated'])
        .isRequired,
};

Header.propTypes = {
    ...headerPropTypes,
};

export default Header;
