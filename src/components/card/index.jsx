import PropTypes from 'prop-types';
import { animated } from 'react-spring';

const Card = ({ className, style, ...rest }) => {
    return (
        <animated.div
            className={`card bg-secondary border border-dark border-1 ${className}`}
            style={{ borderRadius: '15px', ...style }}
            {...rest}
        />
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
};

Card.defaultProps = {
    className: '',
    style: {},
};

export default Card;
