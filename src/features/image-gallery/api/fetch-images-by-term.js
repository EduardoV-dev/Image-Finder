import axios from '@lib/axios';
import { useQuery } from 'react-query';

import { IMAGES_PER_PAGE, SEARCH_PHOTOS_ENDPOINT } from './config';
import { formatImagesData } from '../utils/format-data';

/**
 * Fetches images by passing a term to search
 *
 * @param {string} term - Term to search for
 * @param {number} page - Number of page to fetch
 * @returns {{data: object[], totalPages: number}} - Images formatted data
 */
const fetchImagesByTerm = async (term, page) => {
    const { results, total_pages } = await axios.get(
        `/${SEARCH_PHOTOS_ENDPOINT}`,
        {
            params: {
                query: term,
                per_page: IMAGES_PER_PAGE,
                page,
            },
        },
    );

    return {
        data: formatImagesData(results),
        totalPages: total_pages,
    };
};

/**
 * Custom hook that uses useQuery for fetching images by term
 *
 * @param {Object} config - query params
 * @param {string} config.term - Term to search for
 * @param {number} config.page - Number of page to fetch
 * @param {object} config.config - react-query useQuery configuration object
 *
 * @returns useQueryData
 */
export const useImagesByTerm = ({ config, page, term }) =>
    useQuery({
        queryKey: ['images-by-term', term, page],
        queryFn: () => fetchImagesByTerm(term, page),
        ...config,
    });
