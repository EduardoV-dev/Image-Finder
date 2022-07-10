import { Fragment } from 'react';
import { Waypoint } from 'react-waypoint';
import { Container } from 'react-bootstrap';

import { Spinner } from '@components';
import PhotoItem from './item';
import useImagesFetch from './useImagesFetch';
import Masonry from 'react-masonry-css';

/**
 * Refreshing rate for fetching more images, more images will be fetched when
 * the last 5 images are visible on the screen (have been reached).
 */
const REFRESH_ELEMENTS_AT = 5;

const Photos = () => {
    /* --- Hooks --- */

    const { images, isLoading, paginate } = useImagesFetch();

    /* --- Components --- */

    const Images = images.map((image, idx) => (
        <Fragment key={images.id}>
            <PhotoItem image={image} />

            {idx === images.length - REFRESH_ELEMENTS_AT && (
                <Waypoint onEnter={paginate} />
            )}
        </Fragment>
    ));

    return (
        <Container className="mt-5">
            {isLoading && !images.length ? (
                <Spinner />
            ) : (
                <Masonry
                    breakpointCols={{ default: 4 }}
                    className="masonry-grid"
                    columnClassName="masonry-grid__column"
                >
                    {Images}
                </Masonry>
            )}

            {isLoading && images.length && <Spinner />}
        </Container>
    );
};

export default Photos;
