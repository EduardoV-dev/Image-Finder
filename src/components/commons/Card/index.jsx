const Card = ({ className, ...props }) => {
  return (
    <div
      className={`card bg-secondary border border-dark border-1 ${className}`}
      style={{borderRadius: '15px'}}
      {...props}
    />
  );
}

export default Card;