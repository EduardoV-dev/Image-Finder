import styles from './overlay.module.scss';

const Overlay = (props) => {
    return <div {...props} className={styles.overlay} />;
};

export default Overlay;
