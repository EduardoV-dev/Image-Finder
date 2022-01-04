export const hasNextPage = (page, totalPages) => 
  totalPages !== 0
    ? (page + 1) <= totalPages
    : true;