import React, { Fragment } from 'react';
import Header from '../../components/ImgView/ImgViewHeader';
import BigImage from '../../components/ImgView/BigImage';
import ImageDetails from '../../components/ImgView/ImageDetails';
import Main from '../../components/layout/Main';
import Content from '../../components/layout/Content';
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
          <Content
            gridChild
            grid={'1/4'}
          >
            <BigImage
              // src={}
              // alt={}
            />
          </Content>
          <Sidebar
            gridChild
            grid={'4/6'}
          >
            <ImageDetails />
          </Sidebar>
        </Grid>
      </Main>
    </Fragment>
  );
}

export default ImgView;