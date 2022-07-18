import PropTypes from 'prop-types';
import { animated, config, useTransition } from 'react-spring';
import styles from './spinner.module.scss';

const Spinner = ({ loaded }) => {
    const transition = useTransition(loaded, {
        enter: { opacity: 1, scale: 1 },
        leave: { opacity: 0, scale: 1.3 },

        config: config.gentle,
    });

    return (
        <>
            {transition(
                (style, item) =>
                    !item && (
                        <animated.div
                            className={styles[`sk-cube-grid`]}
                            {...{ style }}
                        >
                            <div
                                className={`${styles['sk-cube']} ${styles['sk-cube1']}`}
                            ></div>
                            <div
                                className={`${styles['sk-cube']} ${styles['sk-cube2']}`}
                            ></div>
                            <div
                                className={`${styles['sk-cube']} ${styles['sk-cube3']}`}
                            ></div>
                            <div
                                className={`${styles['sk-cube']} ${styles['sk-cube4']}`}
                            ></div>
                            <div
                                className={`${styles['sk-cube']} ${styles['sk-cube5']}`}
                            ></div>
                            <div
                                className={`${styles['sk-cube']} ${styles['sk-cube6']}`}
                            ></div>
                            <div
                                className={`${styles['sk-cube']} ${styles['sk-cube7']}`}
                            ></div>
                            <div
                                className={`${styles['sk-cube']} ${styles['sk-cube8']}`}
                            ></div>
                            <div
                                className={`${styles['sk-cube']} ${styles['sk-cube9']}`}
                            ></div>
                        </animated.div>
                    ),
            )}
        </>
    );
};

Spinner.propTypes = {
    loaded: PropTypes.bool.isRequired,
};

export default Spinner;
