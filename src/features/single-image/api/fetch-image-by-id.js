import { useQuery } from 'react-query';

import axios from '@lib/axios';
import { PHOTOS_ENDPOINT } from '../../image-gallery/api/config';

/**
 * Fetches an image details by passing the image id
 *
 * @param {string} id - Image id to fetch its details
 * @returns {object} - Formatted image details without unnecesary data
 */
const fetchImageById = async (id) => {
    const image = await axios.get(`/${PHOTOS_ENDPOINT}/${id}`);

    return {
        alt_description: image.alt_description || '',
        description: image.description || '',
        downloads: image.downloads,
        likes: image.likes,
        views: image.views,
        tags: image.tags_preview.map(
            (tag) => tag.title.charAt(0).toUpperCase() + tag.title.slice(1),
        ),
        imagesURL: image.urls,
        username: image.user.username,
    };
};

/**
 * Custom hook that uses useQuery for fetching a single image detail
 * by passing the image id
 *
 * @param {string} id - Image id to get its details
 * @returns useQueryData
 */
export const useImageById = (id) =>
    useQuery({
        queryKey: ['image-details', id],
        queryFn: () => fetchImageById(id),
    });
