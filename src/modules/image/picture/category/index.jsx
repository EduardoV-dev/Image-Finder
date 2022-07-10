import styles from './category.module.scss';

const Category = ({
  className,
  ...props
}) => {
  return (
    <span
      {...props}
      className={`text-white ${styles.category}`}
    />
  );
}

export default Category;