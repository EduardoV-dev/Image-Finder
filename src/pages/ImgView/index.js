import React, { Fragment } from 'react';
import Header from '../../components/ImgView/ImgViewHeader';
import BigImage from '../../components/ImgView/BigImage';
import Main from '../../components/layout/Main';
import Sidebar from '../../components/layout/Sidebar';
import Grid from '../../components/ui/Grid';

const ImgView = () => {
  return (  
    <Fragment>
      <Header />
      <Main
        minHeight={'4rem'}
      >
        <Grid>
          <BigImage 
            gridChild
            grid={'1/4'}
          />
          <Sidebar
            gridChild
            grid={'4/6'}
          >
            
          </Sidebar>
        </Grid>
      </Main>
    </Fragment>
  );
}
 
export default ImgView;