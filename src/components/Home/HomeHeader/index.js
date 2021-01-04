import React from 'react';
import Header from '../../layout/Header';
import { Title, Subtitle } from './HomeHeaderStyled';

const HomeHeader = () => {
  return (
    <Header
      minHeight={'12rem'}
    >
      <Title>Buscador de Imagenes</Title>
      <Subtitle>Todas las imagenes que aparecen en las busquedas son extraidas desde pixabay</Subtitle>
    </Header>
  );
}

export default HomeHeader;