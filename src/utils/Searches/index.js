import axios from 'axios';
import {
  FORM_ERROR,
  SAVE_TERM,
  SAVE_IMAGES
} from '../../hooks/reducer/types/Search';

export const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

export const handleFetch = URL => async params => await axios.get(URL, { params });

export const termIsEmpty = term => ({
  termIsEmpty: term.trim() === '',
  term
});

export const handleSearchFormError = dispatch => (value) => {
  dispatch({ type: FORM_ERROR, payload: value.termIsEmpty });
  return value.term;
}

export const handleTermSaving = dispatch => term => dispatch({ type: SAVE_TERM, payload: term });

export const handleImageSaving = (dispatch, page) => async images => {
  const pics = await images;
  dispatch({
    type: SAVE_IMAGES,
    payload: {
      images: pics.data,
      page
    }
  });
}