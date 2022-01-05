import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Avatar,
  Card,
  Spinner,
  Overlay,
} from '@components/commons';
import { useLoadedImages } from '@hooks';
import { fetchUserData } from '@services/user';
import { loadUser } from '@redux/photo';
import { formatUserData } from '@utils/formatData';

const Data = () => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const { isLoaded, handleLoad } = useLoadedImages();
  const { photo, user } = useSelector(state => state.photo);
  const { username = '' } = photo;
  const { name, profile_image } = user;

  useEffect(() => {
    username !== '' && fetchUserData(username)
      .then(user => {
        const formattedUser = formatUserData(user);
        dispatch(loadUser(formattedUser));
      })
      .catch(console.log);

    return () => dispatch(loadUser({}));
  }, [username, dispatch]);

  if (JSON.stringify(user) === '{}') return null;

  return (
    <Card className="p-5 container">
      <p className="text-light text-center mb-3">{t('image_uploaded_by')}: </p>
      <div className="d-flex flex-wrap align-items-center mx-auto">
        <Avatar
          size="64px"
          src={profile_image}
          alt=""
          onLoad={handleLoad}
        />
        <span className="text-light ms-3">{name}</span>
      </div>
      <hr className="border border-1 border-info" />
      {!isLoaded && (
        <Overlay>
          <Spinner />
        </Overlay>
      )}
    </Card>
  );
}

export default Data;