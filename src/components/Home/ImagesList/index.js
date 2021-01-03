import React, { useContext, useEffect } from 'react';
import Image from '../Image';
import { SearchContext } from '../../../hooks/context/SearchContext';
import { ImagesContainer } from './ImagesListStyled';

const ImagesList = () => {
  const {term, images, handleImagesSearch} = useContext(SearchContext);

  // eslint-disable-next-line
  useEffect(handleImagesSearch, [term]);

  return (
    <ImagesContainer>
      {images.map(image => (
        <Image
          key={image.id}
          image={image}
        />
      ))}
    </ImagesContainer>
  );
}

export default ImagesList;