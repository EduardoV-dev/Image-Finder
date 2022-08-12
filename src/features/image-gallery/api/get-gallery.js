import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { appendImages, clearData, nextPage } from '../store';
import { useImagesByTerm, useLatestImages } from '.';

/**
 * This custom hook handles pagination for images, if the term is not empty,
 * will fetch images by using that term as a search query, else, will fetch
 * latest images found in Unsplash API
 *
 * @returns {{
 *    images: [],
 *    isLoading: boolean,
 *    isLastPage: boolean,
 *    term: string,
 *    handleNextPage: () => void,
 * }} - Hook state and handler
 */
export const useGallery = () => {
    /* --- Hooks --- */

    const dispatch = useDispatch();
    const { images, page, term, totalPages } = useSelector(
        (state) => state.gallery,
    );

    /* --- State --- */

    const isFetchingByTerm = term !== '';

    /* --- Queries --- */

    const imagesByTerm = useImagesByTerm({
        config: {
            onSuccess: (images) =>
                isFetchingByTerm &&
                dispatch(
                    appendImages({
                        images: images.data,
                        totalPages: images.totalPages,
                    }),
                ),
        },
        page,
        term,
    });

    const latestImages = useLatestImages({
        config: {
            onSuccess: (images) =>
                !isFetchingByTerm &&
                dispatch(
                    appendImages({
                        images: images.data,
                        totalPages: images.totalPages,
                    }),
                ),
        },
        page,
        term,
    });

    /* --- Effects --- */

    // Effect dispatched whenever term state changes
    useEffect(() => {
        // Resets pagination data when the term changes
        dispatch(clearData());

        // Resets pagination data when the user gets out of the page
        return () => dispatch(clearData());
    }, [dispatch, term]);

    /* --- Handlers --- */

    /**
     * Gets the next page images and append them to the current data.
     *
     * @returns {void} - dispatches next page action
     */
    const handleNextPage = () => dispatch(nextPage());

    /* --- State --- */

    // Checks if the fetching is by term by checking that term is not empry
    const isLoading = isFetchingByTerm
        ? // If it is not, will take the imagesByTerm loading data
          imagesByTerm.isLoading || imagesByTerm.isFetching
        : // Else, will take the latestImages loading data
          latestImages.isLoading || latestImages.isFetching;

    const isLastPage = page >= totalPages;

    return {
        images,
        isLoading,
        isLastPage,
        term,

        handleNextPage,
    };
};
