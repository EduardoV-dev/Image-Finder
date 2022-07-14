import { animated } from 'react-spring';
import PropTypes from 'prop-types';

const style = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '10px',
};

const Image = ({ alt, ...rest }) => {
    return (
        <animated.img
            {...rest}
            {...{ style, alt }}
            style={{ ...style, ...rest.style }}
        />
    );
};

Image.propTypes = {
    alt: PropTypes.string,
    onLoad: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
    style: PropTypes.object,
};

Image.defaultProps = {
    alt: '',
    style: {},
};

export default Image;
