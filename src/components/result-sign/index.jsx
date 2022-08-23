import PropTypes from 'prop-types';
import { animated, config, useSpring } from 'react-spring';

/**
 *  It's a component that displays the result of an action after trying to fetch data,
 *  whether it was successful or not.
 */
const ResultSign = ({ children, illustration, testid }) => {
    /* --- Animations --- */

    const fadeInSpring = useSpring({
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0 },

        config: config.gentle,
    });

    return (
        <animated.figure
            style={{
                width: '100%',
                maxWidth: '400px',
                margin: '1.5rem auto 0',
                ...fadeInSpring,
            }}
            data-testid={testid}
        >
            {illustration}

            <figcaption
                className="text-white text-center fw-bold mt-5"
                style={{ fontSize: '2rem' }}
            >
                {children}
            </figcaption>
        </animated.figure>
    );
};

ResultSign.propTypes = {
    /** JSX Element */
    children: PropTypes.node.isRequired,
    /** It has to be a JSX Element as well, SVG as React Component for instance */
    illustration: PropTypes.node.isRequired,
    /** Id for testing purposes */
    testid: PropTypes.string,
};

ResultSign.defaultProps = {
    testid: '',
};

export default ResultSign;
