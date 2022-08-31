import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@store';
import { useImageData, useImageUser } from '.';
import { formatSingleImage, formatImageUser } from '../utils';
import * as actions from '../store';

/**
 * Fetches the image details needed to display the image by
 * using the id provided in the url params
 *
 * @returns {void}
 */
export const useImageDetails = () => {
    /* --- Hooks --- */

    const { id } = useParams();

    const dispatch = useAppDispatch();
    const username = useAppSelector(actions.selectUserNameFromData);

    /* --- Queries --- */

    useImageData({
        id,
        config: {
            onSuccess: (imageData) =>
                dispatch(actions.loadData(formatSingleImage(imageData))),
        },
    });

    useImageUser({
        username,
        config: {
            onSuccess: (user) =>
                dispatch(actions.loadUser(formatImageUser(user))),
        },
    });

    /* --- Effects --- */

    /* Effect used for cleaning redux state when the user gets out of the page */
    useEffect(() => {
        return () => dispatch(actions.clearData());
    }, [dispatch]);
};
