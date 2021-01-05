import React from 'react';
import { Img } from './BigImageStyled';
import placeholder from '../../../assets/Images/sky.jpg';

const BigImage = ({ src, alt }) => {
  return (
    <Img
      src={placeholder}
      alt='img'
    />
  );
}

export default BigImage;