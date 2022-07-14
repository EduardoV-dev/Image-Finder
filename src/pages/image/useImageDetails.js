import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { fetchImageById } from '@services/images';
import { fetchUserData } from '@services/user';
import { loadPhoto, loadUser } from '@redux/photo';

/**
 * Fetches the image details needed to display the image.
 *
 * @param {string} imageId - the image id from the url.
 * @returns {void} - void, since the data is fetched and stored in redux for global disponibility.
 */
const useImageDetails = (imageId) => {
    /* --- Hooks --- */

    const dispatch = useDispatch();
    const { username = '' } = useSelector((state) => state.photo.photo);

    /* --- Queries --- */

    useQuery(['image-details', imageId], () => fetchImageById(imageId), {
        onSuccess: (photo) => dispatch(loadPhoto(photo)),
        onError: (err) => toast.error(err.message),
    });

    useQuery(['user-details', username], () => fetchUserData(username), {
        onSuccess: (user) => dispatch(loadUser(user)),
        onError: (err) => toast.error(err.message),
    });

    /* --- Effects --- */

    /* Effect used for cleaning redux state when the user gets out of the page */

    useEffect(() => {
        return () => {
            dispatch(loadPhoto({}));
            dispatch(loadUser({}));
        };
    }, [dispatch]);
};

export default useImageDetails;
