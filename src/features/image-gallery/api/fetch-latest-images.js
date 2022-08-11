import { useQuery } from 'react-query';

import axios from '@lib/axios';
import { IMAGES_PER_PAGE, PHOTOS_ENDPOINT } from './config';
import { formatImagesData } from '../utils/format-data';

/**
 * Get latest photos from Unsplash API
 *
 * @param {number} page - Number of page to fetch
 * @returns {{data: object[], totalPages: number}} - Images formatted data
 */
const fetchLatestImages = async (page) => {
    const images = await axios.get(`/${PHOTOS_ENDPOINT}`, {
        params: {
            page,
            per_page: IMAGES_PER_PAGE,
        },
    });

    return {
        data: formatImagesData(images),
        totalPages: Infinity,
    };
};

/**
 * Custom hook that uses useQuery for fetching latest images hosted in
 * Unsplash
 *
 * @param {Object} config - hook configuration
 * @param {object} config.config - react-query useQuery configuration object
 * @param {number} config.page - Page number to fetch images
 *
 * @returns useQueryData
 */
export const useLatestImages = ({ config, page }) =>
    useQuery({
        queryKey: ['latest-images', page],
        queryFn: () => fetchLatestImages(page),
        ...config,
    });
