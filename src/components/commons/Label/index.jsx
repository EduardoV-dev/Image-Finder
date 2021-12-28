const Label = ({ className, ...props }) => {
  return (
    <label
      className={`form-label text-light fw-bold ${className}`}
      {...props}
    />
  );
}

export default Label;