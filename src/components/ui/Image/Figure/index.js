import React from 'react';
import Img from '../Img';
import { FigureSC } from './styled';

const Figure = ({
  src,
  onLoad,
  style,
  children,
  width,
  height,
  minHeight,
  maxHeight,
  maxWidth,
  borderRadius,
  margin
}) => {
  return (
    <FigureSC
      minHeight={minHeight}
    >
      <Img
        src={src}
        onLoad={onLoad}
        style={style}
        width={width}
        height={height}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        borderRadius={borderRadius}
        margin={margin}
      />
      {children}
    </FigureSC>
  );
}

export default Figure;