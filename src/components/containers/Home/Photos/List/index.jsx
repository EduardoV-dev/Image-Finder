import { Fragment } from 'react';
import { Waypoint } from 'react-waypoint';

import PhotoItem from '../Item';
import { Card, Spinner } from '@components/commons';
import { REFRESH_ELEMENTS_AT } from '@consts/api';
import useList from './useList';
import styles from './list.module.scss';

const PhotosList = () => {
  const { images, isLoading, paginate } = useList();

  return (
    <>
      {(isLoading && !images.length)
        ? (<Spinner />)
        : (
          <Card
            className={`d-block mt-5 mx-auto p-3 p-md-5 ${styles.list}`}
          >
            {images.map((image, idx) => (
              <Fragment key={images.id}>
                <PhotoItem
                  image={image}
                />
                {(idx === (images.length - REFRESH_ELEMENTS_AT)) && (
                  <Waypoint onEnter={paginate} />
                )}
              </Fragment>
            ))}
          </Card>
        )}
      {(isLoading && images.length) && <Spinner />}
    </>

  );
}

export default PhotosList;