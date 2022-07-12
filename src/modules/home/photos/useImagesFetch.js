import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import { fetchImagesByTerm, fetchLatestImages } from '@services/images';
import { appendImages, nextPage } from '@redux/images';

const useImagesFetch = () => {
    /* --- Hooks and State --- */

    const dispatch = useDispatch();
    const { images, page, term } = useSelector((state) => state.images);

    const { isLoading, isFetching } = useQuery(
        ['images', page, term],
        () =>
            term !== ''
                ? fetchImagesByTerm(term, page)
                : fetchLatestImages(page),
        {
            onSuccess: (images) => {
                dispatch(
                    appendImages({
                        images: images.data,
                        totalPages: images.totalPages,
                    }),
                );
            },
        },
    );

    /* --- Handlers --- */

    /**
     * Gets the next page images and append them to the current data.
     * @returns {void}
     */
    const handleNextPage = () => dispatch(nextPage());

    return {
        images,
        isLoading: isLoading || isFetching,
        handleNextPage,
    };
};

export default useImagesFetch;
