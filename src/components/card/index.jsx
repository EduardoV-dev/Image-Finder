import PropTypes from 'prop-types';
import { animated } from 'react-spring';

/**
 * It's a container that has a particular style, can have animations by using react-spring.
 * style props have to be passed in as an object to do so.
 */
const Card = ({ className, style, ...rest }) => {
    return (
        <animated.div
            className={`card w-100 bg-secondary border border-dark border-1 ${className}`}
            style={{ borderRadius: '15px', height: 'max-content', ...style }}
            {...rest}
        />
    );
};

Card.propTypes = {
    /** Content of the card as JSX Element */
    children: PropTypes.node.isRequired,
    /** Card ClassName for adding styles */
    className: PropTypes.string,
    /** This prop is intended for passing react-spring animation as style */
    style: PropTypes.object,
};

Card.defaultProps = {
    className: '',
    style: {},
};

export default Card;
