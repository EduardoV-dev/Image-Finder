import React from 'react';
import imgPlaceholder from '../../../assets/Images/sky.jpg';
import { Figure, Img } from './ImageStyled';

const Image = () => {
  return (
    <Figure>
      <Img
        src={imgPlaceholder}
        alt='Imagen'
      />
    </Figure>
  );
}

export default Image;