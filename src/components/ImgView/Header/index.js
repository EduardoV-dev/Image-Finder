import React from 'react';
import Header from '../../layout/Header';
import { Normal } from '../../ui/Container';
import { Input, Button } from './styled';

const ImgViewHeader = () => {
  return (
    <Header
      minHeight={'8rem'}
    >
      <Normal
        imgView
      >
        <Input
          type="text"
          placeholder="Buscar Imagenes..."
        />
        <Button
          type="button"
        >Buscar</Button>
      </Normal>
    </Header>
  );
}

export default ImgViewHeader;