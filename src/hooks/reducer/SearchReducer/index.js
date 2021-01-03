import {
  FORM_ERROR,
  SAVE_TERM,
  SAVE_IMAGES,
  CONTROL_PAGINATION
} from '../types';
import { handleTotalPages } from '../../../utils/Pagination';

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
        page: 1,
        term: action.payload,
        loading: true
      }
    case SAVE_IMAGES:
      return {
        ...state,
        images: action.payload.images.hits,
        page: action.payload.page,
        totalPages: handleTotalPages(state.imagesPerPage, action.payload.images.totalHits),
        loading: false
      }
    case CONTROL_PAGINATION: 
      return {
        ...state, 
        page: action.payload,
        loading: true
      }
    default:
      return state;
  }
}

export default SearchReducer;