import React from 'react';
import { Footer, Status, ButtonGroup, Button } from './PaginationStyled';

const Pagination = () => {
  return (
    <Footer>
      <Status>Pagina <span>5</span> de <span>13</span></Status>
      <ButtonGroup>
        <Button
          type="button"
        >&laquo; Anterior</Button>
        <Button
          type="button"
        >Siguiente &raquo;</Button>
      </ButtonGroup>
    </Footer>
  );
}

export default Pagination;