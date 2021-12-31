import { Link } from 'react-router-dom';

import { Card } from '@components/commons';
import { LANG_COOKIE } from '@consts/langs';
import styles from './photo.module.scss';
import cookies from 'js-cookie';

const PhotoItem = ({ image }) => {
  const { id, url, alt } = image;

  return (
    <Link to={`/${cookies.get(LANG_COOKIE)}/image/${id}`}>
      <Card className={`mb-2 overflow-hidden border-0 ${styles.container}`}>
        <img
          src={url}
          alt={alt}
          className={`d-block position-relative rounded mx-100 ${styles.container__img}`}
        />
      </Card>
    </Link>
  );
}

export default PhotoItem;