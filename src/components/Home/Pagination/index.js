import React, { useContext } from 'react';
import Footer from '../../layout/Footer';
import { P, Span } from '../../ui/Text';
import { Button, ButtonGroup } from '../../ui/Button';
import { SearchContext } from '../../../hooks/context/SearchContext';

const Pagination = () => {
  const { images, page, totalPages, loading, handlePagination } = useContext(SearchContext);

  if (images.length === 0 || loading) return null;

  return (
    <Footer>
      <P
        status
      >Pagina <Span>{page}</Span> de <Span>{totalPages}</Span></P>
      <ButtonGroup>
        <Button
          type="button"
          onClick={() => handlePagination('prev')}
          margin={'0.5rem'}
          padding={'0.5rem 1rem'}
        >&laquo; Anterior</Button>
        <Button
          type="button"
          onClick={() => handlePagination('next')}
          margin={'0.5rem'}
          padding={'0.5rem 1rem'}
        >Siguiente &raquo;</Button>
      </ButtonGroup>
    </Footer>
  );
}

export default Pagination;