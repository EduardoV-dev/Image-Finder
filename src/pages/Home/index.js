import React from 'react';
import Header from '../../components/Home/Header';
import SearchForm from '../../components/Home/SearchForm';
import ImagesList from '../../components/Home/ImagesList';
import Pagination from '../../components/Home/Pagination';
import Main from '../../components/layout/Main';
import SearchProvider from '../../hooks/context/SearchContext';

const Home = () => {
  return (
    <SearchProvider>
      <Header />
      <Main
        minHeight={'4rem'}
      >
        <SearchForm />
        <ImagesList />
      </Main>
      <Pagination />
    </SearchProvider>
  );
}

export default Home;