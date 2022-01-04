const style = {
  position: 'absolute',
  zIndex: '10',
  width: '100%',
  height: '100%',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

const Overlay = (props) => {
  return (
    <div {...props} style={style} />
  );
}

export default Overlay;