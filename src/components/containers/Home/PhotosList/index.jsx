import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card, PhotoItem, Spinner } from '@components/commons';
import { loading, loadImages, loadError, } from '@redux/images';
import { fetchLatestImages, fetchImagesByTerm } from '@services/images';
import { formatListImagesData } from '@utils/data';
import styles from './list.module.scss';

const PhotosList = () => {
  const dispatch = useDispatch();
  const {
    term,
    page,
    images,
    isLoading,
  } = useSelector(state => state.images);

  useEffect(() => {
    const fetchImages = async () => {
      dispatch(loading());
      const isTermEmpty = term === '';
      const images = isTermEmpty ? fetchLatestImages(page) : fetchImagesByTerm(term, page);
      images.then(photos => dispatch(loadImages({ images: photos, page }))).catch(err => dispatch(loadError(err)));
      images.then(console.log);
    }

    fetchImages();
  }, [term, page, dispatch]);

  const formattedImages = formatListImagesData(images);

  if (isLoading) return <Spinner />

  return (
    <Card
      className={`d-block mt-5 mx-auto p-3 p-md-5 ${styles.list}`}
    >
      {formattedImages.map(image => (
        <PhotoItem
          key={image.id}
          image={image}
        />
      ))}
    </Card>
  );
}

export default PhotosList;