import React, { Fragment } from 'react';
import LikeIcon from '../../../assets/icons/bx-like.svg';
import ViewsIcon from '../../../assets/icons/eye-regular.svg';
import placeholder from '../../../assets/Images/sky.jpg';
import { UserInfo, Figure, Img, ReactionsBox, Reaction } from './ImageDetailsStyled'

const ImageDetails = () => {
  return (
    <Fragment>
      <UserInfo>
        <p>Imagen subida por:</p>
        <Figure>
          <Img
            src={placeholder}
            alt='Persona'
            borderRadius={'30px'}
            width={'48px'}
            height={'48px'}
          />
          <span>Alicia Navarrete</span>
        </Figure>
      </UserInfo>
      <ReactionsBox>
        <Reaction
          mr={'1rem'}
        >
          <Img
            src={LikeIcon}
            alt={'Likes'}
            width={'32px'}
            height={'32px'}
          />
          <span>14520</span>
        </Reaction>
        <Reaction
          ml={'1rem'}
        >
          <Img
            src={ViewsIcon}
            alt={'Vistas'}
            width={'32px'}
            height={'32px'}
          />
          <span>14520</span>
        </Reaction>
      </ReactionsBox>
      <button
        type="button"
      >
        Descargar
      </button>
    </Fragment >
  );
}

export default ImageDetails;