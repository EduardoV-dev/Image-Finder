import React, { createContext, useReducer } from 'react';
import {
  toggleDropdown,
  catchImageId,
  saveImageDetails
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
    imageSizes: []
  }

  const [state, dispatch] = useReducer(ImageDetailsReducer, initialState);

  const { isDropdown, imageId, imageDetails } = state;

  const handleDropdown = toggleDropdown(dispatch);

  const handleImageId = catchImageId(dispatch);

  const handleFetchImageInfo = async () => {
    if (!imageId) return;
    pipe(
      fetchImageDetailsById,
      saveImageDetails(dispatch)
    )(imageId);
  }

  return (
    <ImageDetailsContext.Provider
      value={{
        isDropdown,
        imageId,
        imageDetails,
        handleDropdown,
        handleImageId,
        handleFetchImageInfo
      }}
    >
      {children}
    </ImageDetailsContext.Provider>
  )
}

export default ImageDetailsProvider;