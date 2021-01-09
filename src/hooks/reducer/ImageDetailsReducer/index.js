import {
  TOGGLE_DROPDOWN,
  SAVE_IMAGEID,
  SAVE_DETAILS
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
        imageId: action.payload
      }
    case SAVE_DETAILS:
      return {
        ...state,
        imageDetails: action.payload.hits[0]
      }
    default: 
      return state;
  }
}

export default ImageDetailsReducer;