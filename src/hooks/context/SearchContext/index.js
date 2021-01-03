import React, { createContext, useReducer } from 'react';
import SearchReducer from '../../reducer/SearchReducer';
import {
  handleSearchFormError,
  termIsEmpty,
  handleTermSaving,
  handleImageSaving
} from '../../../utils/Searches';
import { fetchImages } from '../../../Services/Images';

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const initialState = {
    term: '',
    formError: false,
    images: [],
    page: 1,
    totalPages: 0,
    imagesPerPage: 30
  }
  const [state, dispatch] = useReducer(SearchReducer, initialState);

  const { term, page, imagesPerPage } = state;

  // Event for submitting the SearchForm
  const handleSearchSubmit = (e, term) => {
    e.preventDefault();

    termIsEmpty(dispatch, term);
    handleSearchFormError(dispatch, false);
    handleTermSaving(dispatch, term);
  }

  const handleImagesSearch = async () => {
    const images = await fetchImages({ term, page, imagesPerPage });
    handleImageSaving(dispatch, images.data);
  }

  return (
    <SearchContext.Provider
      value={{
        term: state.term,
        images: state.images,
        handleSearchSubmit,
        handleImagesSearch
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}


export default SearchProvider;