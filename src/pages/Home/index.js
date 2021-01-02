import React, { Fragment } from 'react';
import Header from '../../components/Home/Header';
import SearchForm from '../../components/Home/SearchForm';
import ImagesList from '../../components/Home/ImagesList';
import Footer from '../../components/Home/Pagination';
import { Main } from './HomeStyled';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Main>
        <SearchForm />
        <ImagesList />
      </Main>
      <Footer />
    </Fragment>
  );
}

export default Home;