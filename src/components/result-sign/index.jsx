import PropTypes from 'prop-types';

const ResultSign = ({ children, illustration }) => (
    <figure
        style={{
            width: '100%',
            maxWidth: '400px',
            margin: '1.5rem auto 0',
        }}
    >
        {illustration}

        <figcaption
            className="text-white text-center fw-bold mt-5"
            style={{ fontSize: '2rem' }}
        >
            {children}
        </figcaption>
    </figure>
);

ResultSign.propTypes = {
    children: PropTypes.node.isRequired,
    illustration: PropTypes.node.isRequired,
};

export default ResultSign;
