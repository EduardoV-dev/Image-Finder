import React, { useContext, useEffect } from 'react';
import Dropdown from '../Dropdown';
import LikeIcon from '../../../assets/icons/bx-like.svg';
import ViewsIcon from '../../../assets/icons/eye-regular.svg';
import Spinner from '../../common/Spinner';
import { Normal } from '../../ui/Container';
import { P, Span } from '../../ui/Text';
import { Figure } from '../../ui/Image';
import { Button } from '../../ui/Button';
import { withRouter } from 'react-router-dom';
import { ImageDetailsContext } from '../../../hooks/context/ImageDetailsContext';
import { formatNumber, extractImages } from '../../../utils/Image';

const ImageDetails = ({ match: { params } }) => {
  const {
    isDropdown,
    imageDetails,
    handleDropdown,
    handleImageId,
    loading,
    imagesVisible,
    setImagesVisible
  } = useContext(ImageDetailsContext);
  const { id } = params;
  // eslint-disable-next-line
  useEffect(() => handleImageId(id), []);

  if (!imageDetails || loading) return <Spinner />;

  const { likes, views, user, userImageURL } = imageDetails;
  const imagesSizes = extractImages(imageDetails);
  const dropdownComponent = isDropdown ? <Dropdown imagesSizes={imagesSizes} /> : null

  return (
    <>
      <Normal
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
            style={() => setImagesVisible(imagesVisible)}
            minHeight={'50px'}
            borderRadius={'30px'}
            width={'48px'}
            height={'48px'}
            margin={'0 1rem 0 0'}

          >
            <Span
              fontColor={({ theme }) => theme.text}
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
            padding={'0 1rem'}
            borderRadius={'50px'}
            flexRowCenter
          >
            <Figure
              src={LikeIcon}
              alt={'Likes'}
              width={'20px'}
              height={'20px'}
              margin={'0 0.5rem 0 0'}
            >
              <Span
                fontColor={({ theme }) => theme.text}
                noUserSelect
              >{formatNumber(likes)}</Span>
            </Figure>
          </Normal>
          <Normal
            width={'auto'}
            minHeight={'50px'}
            padding={'0 1rem'}
            borderRadius={'50px'}
            flexRowCenter
          >
            <Figure
              src={ViewsIcon}
              alt={'Vistas'}
              width={'20px'}
              height={'20px'}
              margin={'0 0.5rem 0 0'}
            >
              <Span
                fontColor={({ theme }) => theme.text}
                noUserSelect
              >{formatNumber(views)}</Span>
            </Figure>
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