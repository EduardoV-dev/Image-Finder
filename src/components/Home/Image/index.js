import React from 'react';
import { Figure, Img } from './ImageStyled';

const Image = ({ image }) => {
  const { id, largeImageURL } = image;
  return (
    <Figure to={`/image/${id}`}>
      <Img
        src={largeImageURL}
        alt='Imagen'
      />
    </Figure>
  );
}

export default Image;