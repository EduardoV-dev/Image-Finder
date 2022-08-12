import { axios } from '@lib';
import { useQuery } from 'react-query';

import { IMAGES_PER_PAGE, SEARCH_PHOTOS_ENDPOINT } from '../config';
import { formatImagesData } from '../utils/format-data';

/**
 * Fetches images by passing a term to search
 *
 * @param {Object} config - query params
 * @param {string} config.term - Term to search for
 * @param {number} config.page - Number of page to fetch
 *
 * @returns {{data: object[], totalPages: number}} - Images formatted data
 */
export const fetchImagesByTerm = async ({ page, term }) => {
    // Avoids unnecessary fetching
    if (term === '')
        return {
            data: [],
            totalPages: 0,
        };

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
