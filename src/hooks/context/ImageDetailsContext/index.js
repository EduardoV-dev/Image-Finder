import React, { createContext, useReducer } from 'react';
import {
  toggleDropdown,
  catchImageId,
  saveImageDetails,
  cleanImageDetails,
  defineImagesVisibility,
  setImageVisibility
} from '../../../utils/Image';
import { fetchImageDetailsById } from '../../../services/api/Images';
import { pipe } from '../../../utils/Searches';

import ImageDetailsReducer from '../../reducer/ImageDetailsReducer';

export const ImageDetailsContext = createContext();

const ImageDetailsProvider = ({ children }) => {
  const initialState = {
    isDropdown: false,
    imageId: null,
    imageDetails: null,
    imageSizes: [],
    imagesVisible: false
  }

  const [state, dispatch] = useReducer(ImageDetailsReducer, initialState);

  const { isDropdown, imageId, imageDetails, loading, imagesVisible } = state;

  const handleDropdown = toggleDropdown(dispatch);
  const handleImageId = catchImageId(dispatch);

  const handleFetchImageInfo = async () => {
    if (!imageId) return;
    pipe(
      fetchImageDetailsById,
      saveImageDetails(dispatch)
    )(imageId);
  }

  const cleanDetails = cleanImageDetails(dispatch);
  const handleImageVisibility = defineImagesVisibility(dispatch);
  const setImagesVisible = setImageVisibility(dispatch);

  return (
    <ImageDetailsContext.Provider
      value={{
        isDropdown,
        imageId,
        imageDetails,
        loading,
        imagesVisible,
        handleDropdown,
        handleImageId,
        handleFetchImageInfo,
        cleanDetails,
        handleImageVisibility,
        setImagesVisible
      }}
    >
      {children}
    </ImageDetailsContext.Provider>
  )
}

export default ImageDetailsProvider;