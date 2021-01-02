import React from 'react';
import { HeaderContainer, Title, Subtitle } from './HeaderStyled';

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Buscador de Imagenes</Title>
      <Subtitle>Todas las imagenes que aparecen en las busquedas son extraidas desde pixabay</Subtitle>
    </HeaderContainer>
  );
}

export default Header;