import { Card, PhotoItem } from '@components/commons';
import styles from './list.module.scss';

const PhotosList = () => {
  return (
    <Card
      className={`w-75 d-grid mt-5 mx-auto p-3 p-md-5 ${styles.list}`}
    >
      <PhotoItem />
      <PhotoItem />
      <PhotoItem />
      <PhotoItem />
      <PhotoItem />
    </Card>
  );
}

export default PhotosList;