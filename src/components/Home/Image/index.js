import React from 'react';
import { FigureLink } from '../../ui/Image';

const Image = ({ image }) => {
  const { id, largeImageURL } = image;
  return (
    <FigureLink
      to={`/image/${id}`}
      src={largeImageURL}
      alt='Imagen desde pixabay'
      minHeight={'15rem'}
      maxHeight={'38rem'}
      maxWidth={'100%'}
      borderRadius={'20px'}
    >
      {/* Space for creating an overlay for the images */}
    </FigureLink>
  );
}

export default Image;