import Masonry from 'react-masonry-css';
import { Fragment } from 'react';
import { Waypoint } from 'react-waypoint';
import { Container } from 'react-bootstrap';

import { ResultSign, Spinner } from '@components';
import { ReactComponent as ResultsNotFoundIcon } from '@assets/svg/results-not-found.svg';
import PhotoItem from './item';
import useImagesFetch from './useImagesFetch';
import { useTranslation } from 'react-i18next';

/**
 * Refreshing rate for fetching more images, more images will be fetched when
 * the last 5 images are visible on the screen (have been reached).
 */
const REFRESH_ELEMENTS_AT = 5;

/** Breakpoints work as desktop first */
const BREAKPOINTS_COLS = {
    375: 1,
    576: 2,
    1200: 3,
    1400: 4,
    default: 5,
};

const Photos = () => {
    /* --- Hooks --- */

    const { t } = useTranslation();
    const { images, isLoading, isLastPage, term, handleNextPage } =
        useImagesFetch();
    // const images = [{}];

    /* --- Components --- */

    const Images = images.map((image, idx) => {
        return (
            <Fragment key={image.id + idx}>
                <PhotoItem {...{ image }} />

                {idx === images.length - REFRESH_ELEMENTS_AT && (
                    <Waypoint onEnter={handleNextPage} />
                )}
            </Fragment>
        );
    });

    return (
        <Container className="mt-5">
            {isLoading && !images.length ? (
                <Spinner />
            ) : (
                <>
                    <Masonry
                        breakpointCols={BREAKPOINTS_COLS}
                        className="masonry-grid"
                        columnClassName="masonry-grid__column"
                    >
                        {Images}
                    </Masonry>

                    {!images.length && (
                        <ResultSign illustration={<ResultsNotFoundIcon />}>
                            {t('home_not_found')}{' '}
                            <span className="text-info">{term}</span>
                        </ResultSign>
                    )}

                    {isLastPage && images.length && (
                        <ResultSign illustration={<ResultsNotFoundIcon />}>
                            {t('home_no_more_results')}{' '}
                            <span className="text-info">{term}</span>
                        </ResultSign>
                    )}
                </>
            )}

            {isLoading && images.length && <Spinner />}
        </Container>
    );
};

export default Photos;
