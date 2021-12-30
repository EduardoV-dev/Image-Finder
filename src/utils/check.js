export const isTermEmpty = (term = '') =>
  term === ''

export const isNextPage = (page, totalPages) => 
  totalPages !== 0
    ? (page + 1) <= totalPages
    : true;