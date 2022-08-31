import queryString from 'query-string';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppDispatch } from '@store';
import { keywordOnChange } from '../store/search-slice';
import { loadTerm } from '../store/gallery-slice';

/**
 * Loads the query string into search term for the first render of
 * the home page, this will trigger an automated fetching, handled
 * by * get-gallery.js *
 *
 * @returns {void} Doesn't return anything
 */
export const useLoadInitialTerm = () => {
    /* --- Hooks --- */

    const dispatch = useAppDispatch();
    const firstRenderRef = useRef(true);
    const { search } = useLocation();

    /* --- State --- */

    const { query = '' } = queryString.parse(search);

    /* --- Effects --- */

    useEffect(() => {
        // If it is not the first render or the query string is empty
        // Effect won't run.
        if (!firstRenderRef.current || query === '') return;

        /* Loads query string into the form input value */
        dispatch(keywordOnChange(query));

        /* Loads the term for automatically fetching the images */
        dispatch(loadTerm(query));

        firstRenderRef.current = false;

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
