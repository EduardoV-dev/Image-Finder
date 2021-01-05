import {
  CONTROL_PAGINATION
} from '../../hooks/reducer/types/Search';

export const handleTotalPages = (imagesPerPage, totalHits) => Math.ceil(totalHits / imagesPerPage);

export const handleNewPage = direction => ({ page, totalPages }) => {
  let newPage;
  switch (direction) {
    case 'prev':
      newPage = page - 1;
      if (newPage < 1) return page;
      break;
    case 'next':
      newPage = page + 1;
      if (newPage > totalPages) return page;
      break;
    default:
      return 0;
  }
  return newPage;
}

export const handlePaginationSaving = (dispatch) => newPage =>
  dispatch({ type: CONTROL_PAGINATION, payload: newPage });