import { Link } from 'react-router-dom';

import { Card } from '@components/commons';
import styles from './photo.module.scss';

const PhotoItem = ({ image }) => {
  const { id, url, alt } = image;

  return (
    <Link to={`/image/${id}`}>
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