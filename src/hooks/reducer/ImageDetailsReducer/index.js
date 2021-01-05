import {
  TOGGLE_DROPDOWN,
  SAVE_IMAGEID
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
    default: 
      return state;
  }
}

export default ImageDetailsReducer;