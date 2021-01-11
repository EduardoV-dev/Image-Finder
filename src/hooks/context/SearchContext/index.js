import React, { createContext, useReducer } from 'react';
import SearchReducer from '../../reducer/SearchReducer';
import {
  pipe,
  handleSearchFormError,
  termIsEmpty,
  handleTermSaving,
  handleImageSaving
} from '../../../utils/Searches';
import { handleNewPage, handlePaginationSaving } from '../../../utils/Pagination';
import { fetchImages } from '../../../services/api/Images';

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const initialState = {
    term: '',
    formError: false,
    images: [],
    page: 1,
    totalPages: 0,
    imagesPerPage: 30,
    loading: true
  }
  const [state, dispatch] = useReducer(SearchReducer, initialState);

  const { term, formError, images, page, totalPages, imagesPerPage, loading } = state;

  // Event for submitting the SearchForm
  const handleSearchSubmit = (e, input) => {
    e.preventDefault();
    pipe(
      termIsEmpty,
      handleSearchFormError(dispatch),
      handleTermSaving(dispatch)
    )(input);
  }

  const handleImagesSearch = () => {
    pipe(
      fetchImages,
      handleImageSaving(dispatch, page)
    )({ term, page, imagesPerPage });
  }

  const handlePagination = direction => {
    pipe(
      handleNewPage(direction),
      handlePaginationSaving(dispatch)
    )({ page, totalPages });
  }

  return (
    <SearchContext.Provider
      value={{
        term,
        images,
        page,
        totalPages,
        formError,
        loading,
        handleSearchSubmit,
        handleImagesSearch,
        handlePagination
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}


export default SearchProvider;