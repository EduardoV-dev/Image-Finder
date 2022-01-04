const style = {
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  borderRadius: '10px',
};

const Image = ({
  alt = '',
  ...props
}) => {
  return (
    <img
      {...props}
      alt={alt}
      style={style}
    />
  );
}

export default Image;