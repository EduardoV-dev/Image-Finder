import React from 'react';
import Header from '../../layout/Header';
import { H1, P } from '../../ui/Text';

const HomeHeader = () => {
  return (
    <Header
      minHeight={'12rem'}
    >
      <H1>Buscador de Imagenes</H1>
      <P>Todas las imagenes que aparecen en las busquedas son extraidas desde pixabay</P>
    </Header>
  );
}

export default HomeHeader;