import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { fetchImagesByTerm, fetchLatestImages } from '@services/images';
import { appendImages, clearData, nextPage } from '@redux/images';

const useImagesFetch = () => {
    /* --- Hooks --- */

    const dispatch = useDispatch();
    const { images, page, term, totalPages } = useSelector(
        (state) => state.images,
    );

    console.log(term);

    /* --- Queries --- */

    const { isLoading, isFetching } = useQuery(
        /* Watches for any changes in page and term for referching */
        ['home-images', page, term],
        () =>
            term !== ''
                ? fetchImagesByTerm(term, page)
                : fetchLatestImages(page),
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
