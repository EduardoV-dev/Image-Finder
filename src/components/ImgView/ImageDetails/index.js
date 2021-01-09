import React, { Fragment, useContext, useEffect } from 'react';
import Dropdown from '../Dropdown';
import LikeIcon from '../../../assets/icons/bx-like.svg';
import ViewsIcon from '../../../assets/icons/eye-regular.svg';
import { withRouter } from 'react-router-dom';
import { ImageDetailsContext } from '../../../hooks/context/ImageDetailsContext';
import { formatNumber, extractImages } from '../../../utils/Image';
import { UserInfo, Figure, Img, ReactionsBox, Reaction, Button } from './ImageDetailsStyled'

const ImageDetails = ({ match: { params } }) => {
  const { isDropdown, imageDetails, handleDropdown, handleImageId } = useContext(ImageDetailsContext);
  const { id } = params;

  // eslint-disable-next-line
  useEffect(() => handleImageId(id), []);

  if (!imageDetails) return null;

  const { likes, views, user, userImageURL } = imageDetails;

  const imagesSizes = extractImages(imageDetails);

  const dropdownComponent = isDropdown ? <Dropdown imagesSizes={imagesSizes} /> : null

  return (
    <Fragment>
      <UserInfo>
        <p>Imagen subida por:</p>
        <Figure>
          <Img
            src={userImageURL}
            alt='Persona'
            borderRadius={'30px'}
            width={'48px'}
            height={'48px'}
          />
          <span>{user}</span>
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
          <span>{formatNumber(likes)}</span>
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
          <span>{formatNumber(views)}</span>
        </Reaction>
      </ReactionsBox>
      <Button
        type="button"
        onClick={handleDropdown}
      >
        Descargar
      </Button>
      {dropdownComponent}
    </Fragment >
  );
}

export default withRouter(ImageDetails);