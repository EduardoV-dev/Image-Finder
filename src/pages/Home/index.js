import React, { useContext, useEffect } from 'react';
import Header from '../../components/Home/Header';
import SearchForm from '../../components/Home/SearchForm';
import ImagesList from '../../components/Home/ImagesList';
import Pagination from '../../components/Home/Pagination';
import Main from '../../components/layout/Main';
import { ImageDetailsContext } from '../../hooks/context/ImageDetailsContext';

const Home = () => {
  const { cleanDetails } = useContext(ImageDetailsContext);
  // eslint-disable-next-line
  useEffect(() => cleanDetails(), []);

  return (
    <>
      <Header />
      <Main
        minHeight={'4rem'}
      >
        <SearchForm />
        <ImagesList />
      </Main>
      <Pagination />
    </>
  );
}

export default Home;