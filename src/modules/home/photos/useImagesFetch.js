import queryString from 'query-string';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { fetchImagesByTerm, fetchLatestImages } from '@services/images';
import { appendImages, clearData, nextPage } from '@redux/images';

const useImagesFetch = () => {
    /* --- Hooks --- */

    const dispatch = useDispatch();
    const { search } = useLocation();
    const { images, page, term, totalPages } = useSelector(
        (state) => state.images,
    );

    /* --- State --- */

    const { query } = queryString.parse(search);

    /* --- Queries --- */

    const { isLoading, isFetching } = useQuery(
        /* Watches for any changes in page and term for referching */
        ['home-images', page, term],
        () =>
            term !== ''
                ? fetchImagesByTerm(term, page)
                : // Condition for avoiding fetching latest images when query string exists in the url
                  // Otherwise, it will fetch latest images first appending them at the beginnning of the images by term
                  !query && fetchLatestImages(page),
        {
            onSuccess: (images) =>
                dispatch(
                    appendImages({
                        images: images.data,
                        totalPages: images.totalPages,
                    }),
                ),
            onError: (err) => toast.error(err.message),
            refetchOnWindowFocus: false,
        },
    );

    /* --- Effects --- */

    useEffect(() => {
        return () => dispatch(clearData());
    }, [dispatch]);

    /* --- Handlers --- */

    /**
     * Gets the next page images and append them to the current data.
     *
     * @returns {void}
     */
    const handleNextPage = () => dispatch(nextPage());

    return {
        images,
        isLoading: isLoading || isFetching,
        isLastPage: page >= totalPages,
        term,

        handleNextPage,
    };
};

export default useImagesFetch;
