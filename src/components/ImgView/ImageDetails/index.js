import React, { Fragment, useContext } from 'react';
import Dropdown from '../Dropdown';
import LikeIcon from '../../../assets/icons/bx-like.svg';
import ViewsIcon from '../../../assets/icons/eye-regular.svg';
import placeholder from '../../../assets/Images/sky.jpg';
import { ImageDetailsContext } from '../../../hooks/context/ImageDetailsContext';
import { UserInfo, Figure, Img, ReactionsBox, Reaction, Button } from './ImageDetailsStyled'

const ImageDetails = () => {
   const { isDropdown, toggleDropdown } = useContext(ImageDetailsContext);

  const dropdownComponent = isDropdown ? <Dropdown /> : null

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
            width={'20px'}
            height={'20px'}
          />
          <span>14520</span>
        </Reaction>
        <Reaction
          ml={'1rem'}
        >
          <Img
            src={ViewsIcon}
            alt={'Vistas'}
            width={'20px'}
            height={'20px'}
          />
          <span>14520</span>
        </Reaction>
      </ReactionsBox>
      <Button
        type="button"
        onClick={toggleDropdown}
      >
        Descargar
      </Button>
      {dropdownComponent}
    </Fragment >
  );
}

export default ImageDetails;