import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@store';
import { useImagesByTerm, useLatestImages } from '../api';
import { formatImagesData } from '../utils';
import * as galleryStore from '../store';

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
 * }} Gallery state and handler
 */
export const useGallery = () => {
    /* --- Hooks --- */

    const dispatch = useAppDispatch();
    const { images, page, term, totalPages } = useAppSelector(
        galleryStore.selectGalleryState,
    );

    /* --- State --- */

    const isFetchingByTerm = term !== '';

    /* --- Queries --- */

    const imagesByTerm = useImagesByTerm({
        config: {
            onSuccess: (images) =>
                isFetchingByTerm &&
                dispatch(
                    galleryStore.appendImages({
                        images: formatImagesData(images.data),
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
                    galleryStore.appendImages({
                        images: formatImagesData(images.data),
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
        dispatch(galleryStore.clearData());

        // Resets pagination data when the user gets out of the page
        return () => dispatch(galleryStore.clearData());
    }, [dispatch, term]);

    /* --- Handlers --- */

    /**
     * Gets the next page images and append them to the current data.
     *
     * @returns {void} - dispatches next page action
     */
    const handleNextPage = () => dispatch(galleryStore.nextPage());

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
