import React from 'react';
import imgPlaceholder from '../../../assets/Images/sky.jpg';
import { Figure, Img } from './ImageStyled';

const Image = ({ image }) => {
  const { largeImageURL } = image;
  return (
    <Figure>
      <Img
        src={largeImageURL}
        alt='Imagen'
      />
    </Figure>
  );
}

export default Image;