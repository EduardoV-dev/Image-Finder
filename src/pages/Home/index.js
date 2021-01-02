import React, { Fragment } from 'react';
import Header from '../../components/Home/Header';
import SearchForm from '../../components/Home/SearchForm';
import {Main} from './HomeStyled';

const Home = () => {
  return (  
    <Fragment>
      <Header />
      <Main>
        <SearchForm />
      </Main>
    </Fragment>
  );
}
 
export default Home;