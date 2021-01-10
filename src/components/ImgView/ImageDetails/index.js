import React, { useContext, useEffect } from 'react';
import Dropdown from '../Dropdown';
import LikeIcon from '../../../assets/icons/bx-like.svg';
import ViewsIcon from '../../../assets/icons/eye-regular.svg';
import { Normal } from '../../ui/Container';
import { P, Span } from '../../ui/Text';
import { Figure, Img } from '../../ui/Image';
import { Button } from '../../ui/Button';
import { withRouter } from 'react-router-dom';
import { ImageDetailsContext } from '../../../hooks/context/ImageDetailsContext';
import { formatNumber, extractImages } from '../../../utils/Image';

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
    <>
      <Normal
        width={'65%'}
        maxWidth={'auto'}
      >
        <Normal
          userInfo
        >
          <P
            block
            margin={'0 0 1rem 0'}
          >Imagen subida por:</P>
          <Figure
            src={userImageURL}
            minHeight={'50px'}
            borderRadius={'30px'}
            width={'48px'}
            height={'48px'}
            margin={'0 1rem 0 0'}
          >
            <Span
              color={({ theme }) => theme.text}
            >{user}</Span>
          </Figure>
        </Normal>
        <Normal
          flexRowCenter
          padding={'1rem 0 0 0'}
        >
          <Normal
            width={'auto'}
            minHeight={'50px'}
            margin={'0 1rem 0 0'}
            padding={'0 1rem'}
            borderRadius={'50px'}
            flexRowCenter
          >
            <Img
              src={LikeIcon}
              alt={'Likes'}
              width={'20px'}
              height={'20px'}
              margin={'0 0.5rem 0 0'}
            />
            <Span
              color={({ theme }) => theme.text}
              noUserSelect
            >{formatNumber(likes)}</Span>
          </Normal>
          <Normal
            width={'auto'}
            minHeight={'50px'}
            margin={'0 0 0 1rem'}
            padding={'0 1rem'}
            borderRadius={'50px'}
            flexRowCenter
          >
            <Img
              src={ViewsIcon}
              alt={'Vistas'}
              width={'20px'}
              height={'20px'}
              margin={'0 0.5rem 0 0'}
            />
            <Span
              color={({ theme }) => theme.text}
              noUserSelect
            >{formatNumber(views)}</Span>
          </Normal>
        </Normal>
        <Button
          type="button"
          onClick={handleDropdown}
          block
          padding={'0.7rem'}
          margin={'1rem auto 0 auto'}
          borderRadius={'30px'}
        >
          Descargar
      </Button>
      </Normal>
      {dropdownComponent}
    </>
  );
}

export default withRouter(ImageDetails);