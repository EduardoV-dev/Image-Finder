import styles from './header.module.scss';

const Header = ({ className, ...props }) => {
  return (
    <header
      className={
        `w-100 position-sticky top-0
        ${className}
        ${styles.header}
        `
      }
      {...props}
    />
  );
}

export default Header;