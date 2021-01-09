import React from 'react';
import Img from '../Img';
import { Figure } from './styled';

const FigureLink = ({
  src,
  alt,
  children,
  to,
  minHeight,
  maxHeight,
  maxWidth,
  borderRadius
}) => {
  return (
    <Figure to={to}>
      <Img
        src={src}
        alt={alt}
        minHeight={minHeight}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        borderRadius={borderRadius}
      />
      {children}
    </Figure>
  );
}

export default FigureLink;