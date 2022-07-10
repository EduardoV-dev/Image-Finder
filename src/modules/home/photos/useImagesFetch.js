import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loading, loadImages, loadError, loadMoreImages } from '@redux/images';
import { fetchImagesByTerm, fetchLatestImages } from '@services/images';

const useImagesFetch = () => {
    /* --- Hooks --- */

    const dispatch = useDispatch();
    const { term, page, images, isLoading } = useSelector(
        (state) => state.images,
    );

    /* --- Handlers --- */

    /**
     * Gets the next page images and append them to the current data.
     * @returns {void}
     */
    const paginate = async () => dispatch(loadMoreImages());

    /* --- Effects --- */

    useEffect(() => {
        (async () => {
            dispatch(loading());

            try {
                const imagesInfo = await (term === ''
                    ? fetchLatestImages(page)
                    : fetchImagesByTerm(term, page));

                dispatch(loadImages(imagesInfo));
            } catch (e) {
                dispatch(loadError(e));
            }
        })();
    }, [term, page, dispatch]);

    return {
        images: formatImagesData(images),
        isLoading,
        paginate,
    };
};

export default useImagesFetch;

/**
 *
 * @param {IImage[]} images - images dataset fetched from API
 * @returns {IImage[]} - A formatted version of the array but removing unnecesary data.
 */
function formatImagesData(images) {
    return images.map((image) => ({
        id: image.id,
        alt: image.alt_description || '',
        url: image.urls.small,
        likes: image.likes,
        user: {
            name: image.user.name || '',
            photo: image.user.profile_image.small,
        },
    }));
}
