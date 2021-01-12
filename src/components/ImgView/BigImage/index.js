import React, { useContext, useEffect } from 'react';
import { ImageDetailsContext } from '../../../hooks/context/ImageDetailsContext';
import { withRouter } from 'react-router-dom';
import { Img } from '../../ui/Image';

const BigImage = () => {
  const { imageDetails, imageId, loading, handleFetchImageInfo } = useContext(ImageDetailsContext);

  // eslint-disable-next-line
  useEffect(() => handleFetchImageInfo(), [imageId]);

  if (!imageDetails || loading) return null;

  const { tags, largeImageURL } = imageDetails;

  return (
    <Img
      src={largeImageURL}
      alt={tags}
      borderRadius={'10px'}
      maxWidth={'45rem'}
      maxHeight={'70vh'}
    />
  );
}

export default withRouter(BigImage);