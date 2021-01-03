import {
  FORM_ERROR,
  SAVE_TERM,
  SAVE_IMAGES
} from '../types';
import {handleTotalPages} from '../../../utils/Searches';

const SearchReducer = (state, action) => {
  switch (action.type) {
    case FORM_ERROR: 
      return {
        ...state, 
        formError: action.payload
      }
    case SAVE_TERM: 
      return {
        ...state,
        term: action.payload
      }
    case SAVE_IMAGES:
      return {
        ...state,
        images: action.payload.hits,
        page: 1,
        totalPages: handleTotalPages(state.imagesPerPage, action.payload.totalHits)
      }
    default:
      return state;
  }
}

export default SearchReducer;