import React from 'react';
import Header from '../../components/ImgView/Header';
import BigImage from '../../components/ImgView/BigImage';
import ImageDetails from '../../components/ImgView/ImageDetails';
import Main from '../../components/layout/Main';
import Content from '../../components/layout/Content';
import Sidebar from '../../components/layout/Sidebar';
import Grid from '../../components/ui/Grid';
import ImageDetailsProvider from '../../hooks/context/ImageDetailsContext';

const ImgView = () => {

  return (
    <ImageDetailsProvider>
      <Header />
      <Main
        minHeight={'4rem'}
      >
        <Grid>
          <Content>
            <BigImage />
          </Content>
          <Sidebar>
            <ImageDetails />
          </Sidebar>
        </Grid>
      </Main>
    </ImageDetailsProvider>
  );
}

export default ImgView;