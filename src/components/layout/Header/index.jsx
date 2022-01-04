const style = {
  zIndex: 100,
}

const Header = ({ className, ...props }) => {
  return (
    <header
      {...props}
      className={`w-100 position-sticky top-0 ${className}`}
      style={style}
    />
  );
}

export default Header;