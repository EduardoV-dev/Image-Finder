import React from 'react';
import Header from '../../layout/Header';
import Container from '../../layout/Container';
import { Input, Button } from './ImgViewHeaderStyled';

const ImgViewHeader = () => {
  return (
    <Header
      minHeight={'8rem'}
    >
      <Container
        imgView
      >
        <Input
          type="text"
          placeholder="Buscar Imagenes..."
        />
        <Button
          type="button"
        >Buscar</Button>
      </Container>
    </Header>
  );
}

export default ImgViewHeader;