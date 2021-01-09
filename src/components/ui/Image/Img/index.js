import React from 'react';
import { Image } from './styled';
const Img = ({
  src,
  alt,
  minHeight,
  maxHeight,
  maxWidth,
  borderRadius
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      minHeight={minHeight}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      borderRadius={borderRadius}
    />
  );
}

export default Img;