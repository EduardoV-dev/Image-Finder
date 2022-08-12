import { axios } from '@lib';
import { useQuery } from 'react-query';

/**
 * Fetches single user data by its username.
 * k
 * @param {string} username - the username of whom posted the image
 * @returns {{name: string, profile_image: string}} - The used data in a formatted version without unnecesary data
 */
export const fetchUserData = async (username) => {
    // Avoids unnecessary fetching
    if (username === '')
        return {
            name: '',
            profile_image: '',
        };

    const { name, profile_image } = await axios.get(`/users/${username}`);

    return {
        name,
        profile_image: profile_image.medium,
    };
};

/**
 * Custom hook that uses useQuery for fetching the image's user data
 *
 * @param {Object} config - hook configuration
 * @param {import('react-query').UseQueryOptions} [config.config = {}] - react-query useQuery configuration object
 * @param {string} config.username - The username of whom posted the image
 *
 * @returns useQueryData
 */
export const useImageUser = ({ config, username }) =>
    useQuery({
        queryKey: ['image-user', username],
        queryFn: () => fetchUserData(username),
        ...config,
    });
