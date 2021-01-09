import React, { useContext, useEffect } from 'react';
import { ImageDetailsContext } from '../../../hooks/context/ImageDetailsContext';
import { withRouter } from 'react-router-dom';
import { Img } from './styled';

const BigImage = () => {
  const { imageDetails, imageId, handleFetchImageInfo } = useContext(ImageDetailsContext);

  // eslint-disable-next-line
  useEffect(() => handleFetchImageInfo(), [imageId]);

  if (!imageDetails) return null;

  const { tags, largeImageURL } = imageDetails;

  return (
    <Img
      src={largeImageURL}
      alt={tags}
    />
  );
}

export default withRouter(BigImage);