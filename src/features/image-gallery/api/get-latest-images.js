import { useQuery } from 'react-query';

import { axios } from '@lib';
import { PHOTOS_ENDPOINT } from '@config/api';
import { IMAGES_PER_PAGE } from '../config';

export const LATEST_IMAGES_ENDPOINT = PHOTOS_ENDPOINT;

/**
 * Get latest photos from Unsplash API
 *
 * @param {Object} config - hook configuration
 * @param {number} config.page - Page number to fetch images
 * @param {string} config.term - Term to search for
 *
 * @returns {Promise<{data: object[], totalPages: number}>} - Images formatted data
 */
export const fetchLatestImages = async ({ page, term }) => {
    // Avoids unnecessary fetching
    if (term !== '' || page <= 0)
        return {
            data: [],
            totalPages: 0,
        };

    const images = await axios.get(LATEST_IMAGES_ENDPOINT, {
        params: {
            page,
            per_page: IMAGES_PER_PAGE,
        },
    });

    return {
        data: images,
        totalPages: Infinity,
    };
};

/**
 * Custom hook that uses useQuery for fetching latest images hosted in
 * Unsplash
 *
 * @param {Object} config - hook configuration
 * @param {import('react-query').UseQueryOptions} [config.config = {}] - react-query useQuery configuration object
 * @param {number} config.page - Page number to fetch images
 * @param {string} config.term - Term to search for
 *
 * @returns useQueryData
 */
export const useLatestImages = ({ config, ...fetchConfig }) =>
    useQuery({
        queryKey: ['latest-images', fetchConfig],
        queryFn: () => fetchLatestImages(fetchConfig),
        ...config,
    });
