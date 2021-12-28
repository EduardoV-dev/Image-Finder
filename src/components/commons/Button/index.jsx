const Button = ({ className, color, ...props }) => {
  return (
    <button
      className={`btn btn-${color} w-100 text-info fw-bold ${className}`}
      {...props}
    />
  );
}

export default Button;