import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { clearData, loadData, loadUser } from '../store';
import { useImageData, useImageUser } from '.';

/**
 * Fetches the image details needed to display the image by
 * using the id provided in the url params
 *
 * @returns {void}
 */
export const useImageDetails = () => {
    /* --- Hooks --- */

    // Image id from url
    const { id } = useParams();

    const { username = '' } = useSelector((state) => state.picture.data);
    const dispatch = useDispatch();

    /* --- Queries --- */

    useImageData({
        id,
        config: { onSuccess: (data) => dispatch(loadData(data)) },
    });

    useImageUser({
        username,
        config: { onSuccess: (user) => dispatch(loadUser(user)) },
    });

    /* --- Effects --- */

    /* Effect used for cleaning redux state when the user gets out of the page */
    useEffect(() => {
        return () => dispatch(clearData());
    }, [dispatch]);
};
