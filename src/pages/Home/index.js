import React from 'react';
import Header from '../../components/Home/Header';
import SearchForm from '../../components/Home/SearchForm';
import ImagesList from '../../components/Home/ImagesList';
import Pagination from '../../components/Home/Pagination';
import SearchProvider from '../../hooks/context/SearchContext';
import { Main } from './HomeStyled';

const Home = () => {
  return (
    <SearchProvider>
      <Header />
      <Main>
        <SearchForm />
        <ImagesList />
      </Main>
      <Pagination />
    </SearchProvider>
  );
}

export default Home;