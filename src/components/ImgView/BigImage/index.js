import React from 'react';
import Container from '../../layout/Container';
import { Img } from './BigImageStyled';
import placeholder from '../../../assets/Images/sky.jpg';

const BigImage = (props) => {
  return (
    <Container
      {...props}
    >
      <Img
        src={placeholder}
        alt='img'
      />
    </Container>
  );
}

export default BigImage;