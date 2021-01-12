import {
  TOGGLE_DROPDOWN,
  SAVE_IMAGEID,
  SAVE_DETAILS,
  CLEAN_DETAILS,
  IMAGES_VISIBLE
} from '../types/ImageDetails';

const ImageDetailsReducer = (state, action) => {
  switch(action.type) {
    case TOGGLE_DROPDOWN: 
      return {
        ...state,
        isDropdown: !state.isDropdown
      }
    case SAVE_IMAGEID: 
      return {
        ...state,
        imageId: action.payload,
        imagesVisible: false
      }
    case SAVE_DETAILS:
      return {
        ...state,
        imageDetails: action.payload.hits[0],
        loading: false
      }
    case CLEAN_DETAILS: 
      return {
        ...state,
        imageDetails: null,
        loading: true,
        isDropdown: false
      }
    case IMAGES_VISIBLE: 
      return {
        ...state,
        imagesVisible: true
      }
    default: 
      return state;
  }
}

export default ImageDetailsReducer;