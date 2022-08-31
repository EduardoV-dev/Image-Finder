import { useQuery } from 'react-query';

import { axios } from '@lib';
import { PHOTOS_ENDPOINT } from '@config';

/**
 * Fetches an image details by passing the image id
 *
 * @param {string} id - Image id to fetch its details
 * @returns {object} Formatted image details without unnecesary data
 */
export const fetchImageById = (id) => axios.get(`${PHOTOS_ENDPOINT}/${id}`);

/**
 * Custom hook that uses useQuery for fetching a single image detail
 * by passing the image id
 *
 * @param {Object} config - configuration for the custom hook
 * @param {import('react-query').UseQueryOptions} [config.config = {}] - react-query useQuery configuration object
 * @param {string} config.id - Image id to get its details
 * @returns useQueryData
 */
export const useImageData = ({ config, id }) =>
    useQuery({
        queryKey: ['image-details', id],
        queryFn: () => fetchImageById(id),
        ...config,
    });
