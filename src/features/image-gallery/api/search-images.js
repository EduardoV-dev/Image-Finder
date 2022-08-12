import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { loadTerm } from '../store/gallery-slice';

/**
 * Hook that returns the input keyword and, a function for searching images by term
 *
 * @returns {[keyword: string, search: () => void]}
 */
export const useSearchByTerm = () => {
    /* --- Hooks --- */

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { search: searchState, gallery } = useSelector((state) => state);

    /* --- State --- */

    const { term } = gallery;
    const { keyword } = searchState;

    /* --- Handlers --- */

    /**
     * Dispatches loadTerm with the search term for immediately fetching
     * images by term if term is not empty, else, will fetch latest
     * images found in Unsplash
     *
     * @param {string} term - Term to search for
     *
     * @returns {void}
     */
    const search = () => {
        // If previous term is equal to current keyword (form), will not execute
        if (term === keyword) return;

        dispatch(loadTerm(keyword));
        navigate(`/${keyword === '' ? '' : `?query=${keyword}`}`);
    };

    return [keyword, search];
};
