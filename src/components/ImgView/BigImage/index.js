import React, { useContext, useEffect } from 'react';
import { ImageDetailsContext } from '../../../hooks/context/ImageDetailsContext';
import { withRouter } from 'react-router-dom';
import { Img } from '../../ui/Image';
import Spinner from '../../common/Spinner';

const BigImage = () => {
  const {
    imageDetails,
    imageId,
    loading,
    imagesVisible,
    handleFetchImageInfo,
    handleImageVisibility,
    setImagesVisible
  } = useContext(ImageDetailsContext);
  // eslint-disable-next-line
  useEffect(() => handleFetchImageInfo(), [imageId]);
  if (!imageDetails || loading) return <Spinner />;
  const { tags, largeImageURL } = imageDetails;

  return (
    <Img
      style={() => setImagesVisible(imagesVisible)}
      src={largeImageURL}
      alt={tags}
      onLoad={handleImageVisibility}
      borderRadius={'10px'}
      maxWidth={'45rem'}
      maxHeight={'70vh'}
    />
  );
}

export default withRouter(BigImage);