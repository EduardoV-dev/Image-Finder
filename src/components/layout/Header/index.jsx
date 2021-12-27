const Header = ({ className, ...props }) => {
  return (
    <header
      className={
        `w-100 bg-info
        ${className}`
      }
      {...props}
    />
  );
}

export default Header;