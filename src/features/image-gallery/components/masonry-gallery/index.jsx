import Masonry from 'react-masonry-css';
import { Fragment } from 'react';
import { Waypoint } from 'react-waypoint';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { ResultSign, Spinner } from '@components';
import { ReactComponent as ResultsNotFoundIcon } from '@assets/svg/results-not-found.svg';

import { useGallery } from '../../hooks';

import PhotoItem from './item';

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

const MasonryGallery = () => {
    /* --- Hooks --- */

    const { t } = useTranslation();
    const { images, isLoading, isLastPage, term, handleNextPage } =
        useGallery();

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

    const NoResultsSign = (
        <ResultSign illustration={<ResultsNotFoundIcon />} testid="no-results">
            {t('home_not_found')} <span className="text-info">{term}</span>
        </ResultSign>
    );

    const NoMoreResultsSign = (
        <ResultSign
            illustration={<ResultsNotFoundIcon />}
            testid="no-more-results"
        >
            {t('home_no_more_results')}{' '}
            <span className="text-info">{term}</span>
        </ResultSign>
    );

    return (
        <Container className="mt-5">
            {isLoading && !images.length ? (
                <Spinner loaded={isLoading} />
            ) : (
                <>
                    <Masonry
                        breakpointCols={BREAKPOINTS_COLS}
                        className="masonry-grid"
                        columnClassName="masonry-grid__column"
                    >
                        {Images}
                    </Masonry>

                    {!images.length && NoResultsSign}

                    {isLastPage && images.length && NoMoreResultsSign}
                </>
            )}

            {isLoading && images.length && <Spinner loaded={isLoading} />}
        </Container>
    );
};

export default MasonryGallery;
