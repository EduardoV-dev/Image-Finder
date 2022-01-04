const Item = ({
  id,
  text,
  imgDimentions,
  ...props
}) => {
  return (
    <div className="d-flex justify-content-between align-items-center w-100 mb-1">
      <label htmlFor={id} className="text-light">
        <input
          type="radio"
          name="dims"
          className="me-1"
          id={id}
          {...props}
        />
        {text}
      </label>
      <span className="text-white">{imgDimentions}</span>
    </div>
  );
}

export default Item;