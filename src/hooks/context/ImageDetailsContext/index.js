import React, { createContext, useReducer } from 'react';
import {
  TOGGLE_DROPDOWN,
  SAVE_IMAGEID
} from '../../reducer/types/ImageDetails';
import ImageDetailsReducer from '../../reducer/ImageDetailsReducer';

export const ImageDetailsContext = createContext();

const ImageDetailsProvider = ({ children }) => {
  const initialState = {
    isDropdown: false,
    imageId: null
  }

  const [state, dispatch] = useReducer(ImageDetailsReducer, initialState);

  const { isDropdown } = state;

  console.log(isDropdown);

  const toggleDropdown = () => dispatch({ type: TOGGLE_DROPDOWN });

  const handleImageId = imageId => dispatch({ type: SAVE_IMAGEID, payload: imageId })

  return (
    <ImageDetailsContext.Provider
      value={{
        isDropdown,
        toggleDropdown,
        handleImageId
      }}
    >
      {children}
    </ImageDetailsContext.Provider>
  )
}

export default ImageDetailsProvider;