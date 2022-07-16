import PropTypes from 'prop-types';
import { animated, config, useSpring } from 'react-spring';

const ResultSign = ({ children, illustration }) => {
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
    children: PropTypes.node.isRequired,
    illustration: PropTypes.node.isRequired,
};

export default ResultSign;
