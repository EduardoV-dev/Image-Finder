import React, { useContext } from 'react';
import { SearchContext } from '../../../hooks/context/SearchContext';
import { Footer, Status, ButtonGroup, Button } from './styled';

const Pagination = () => {
  const { images, page, totalPages, loading, handlePagination } = useContext(SearchContext);

  if (images.length === 0 || loading) return null;

  return (
    <Footer>
      <Status>Pagina <span>{page}</span> de <span>{totalPages}</span></Status>
      <ButtonGroup>
        <Button
          type="button"
          onClick={() => handlePagination('prev')}
        >&laquo; Anterior</Button>
        <Button
          type="button"
          onClick={() => handlePagination('next')}
        >Siguiente &raquo;</Button>
      </ButtonGroup>
    </Footer>
  );
}

export default Pagination;