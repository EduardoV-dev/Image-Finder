import PropTypes from 'prop-types';
import Header, { headerPropTypes } from './header';
import Footer from './footer';
import styles from './layout.module.scss';

const Layout = ({ children, className, ...rest }) => {
    return (
        <div className={styles.app}>
            <section>
                {/* rest contains header props ({ bgColor, withSearchInput }) */}

                <Header {...rest} />
                <main {...{ className }}>{children}</main>
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
};

export default Layout;
