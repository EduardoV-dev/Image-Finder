import axios from 'axios';
import {
  FORM_ERROR,
  SAVE_TERM,
  SAVE_IMAGES
} from '../../hooks/reducer/types';

export const handleFetch = URL => async params => await axios.get(URL, { params });

export const termIsEmpty = (dispatch, term) => {
  if (term.trim() === '') {
    handleSearchFormError(dispatch, true);
    return;
  }
}

export const handleSearchFormError = (dispatch, value) => dispatch({ type: FORM_ERROR, payload: value });

export const handleTermSaving = (dispatch, term) => dispatch({ type: SAVE_TERM, payload: term });

export const handleImageSaving = (dispatch, images) => dispatch({ type: SAVE_IMAGES, payload: images });

export const handleTotalPages = (imagesPerPage, totalHits) => Math.ceil(totalHits / imagesPerPage);