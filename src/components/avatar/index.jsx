const style = size => ({
  width: size,
  height: size,
  objectFit: 'cover',
  borderRadius: '50%',
});

const Avatar = ({
  size,
  alt = '',
  ...rest
}) => {
  return (
    <img
      {...rest}
      alt={alt}
      style={style(size)}
    />
  );
}

export default Avatar;