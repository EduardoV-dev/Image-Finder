import React, { useContext, useEffect } from 'react';
import Image from '../Image';
import Spinner from '../Spinner';
import Error from '../Error';
import { SearchContext } from '../../../hooks/context/SearchContext';
import { ImagesContainer } from './styled';

const ImagesList = () => {
  const { term, images, page, loading, handleImagesSearch } = useContext(SearchContext);

  // eslint-disable-next-line
  useEffect(handleImagesSearch, [term, page]);

  if (loading) return <Spinner />;
  else if (images.length === 0) return <Error NotFound>Sin Resultados :(</Error>

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