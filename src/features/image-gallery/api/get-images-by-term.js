import { axios } from '@lib';
import { useQuery } from 'react-query';

import { PHOTOS_ENDPOINT } from '@config';
import { IMAGES_PER_PAGE } from '../config';

export const IMAGES_BY_TERM_ENDPOINT = `/search${PHOTOS_ENDPOINT}`;

/**
 * Fetches images by passing a term to search
 *
 * @param {Object} config - query params
 * @param {string} config.term - Term to search for
 * @param {number} config.page - Number of page to fetch
 *
 * @returns {Promise<{data: object[], totalPages: number}>} - Images formatted data
 */
export const fetchImagesByTerm = async ({ page, term }) => {
    // Avoids unnecessary fetching
    if (term === '' || page <= 0)
        return {
            data: [],
            totalPages: 0,
        };

    const { results, total_pages } = await axios.get(IMAGES_BY_TERM_ENDPOINT, {
        params: {
            query: term,
            per_page: IMAGES_PER_PAGE,
            page,
        },
    });

    return {
        data: results,
        totalPages: total_pages,
    };
};

/**
 * Custom hook that uses useQuery for fetching images by term
 *
 * @param {Object} config - query params
 * @param {string} config.term - Term to search for
 * @param {number} config.page - Number of page to fetch
 * @param {import('react-query').UseQueryOptions} [config.config = {}] - react-query useQuery configuration object
 *
 * @returns useQueryData
 */
export const useImagesByTerm = ({ config, ...fetchConfig }) =>
    useQuery({
        queryKey: ['images-by-term', fetchConfig],
        queryFn: () => fetchImagesByTerm(fetchConfig),
        ...config,
    });
