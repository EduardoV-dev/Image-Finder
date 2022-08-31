import { axios } from '@lib';
import { useQuery } from 'react-query';

export const USERS_ENDPOINT = '/users';

export const formatUser = (user) => ({
    name: user.name,
});

/**
 * Fetches single user data by its username, if the username is empty, will return an
 * empty object
 *
 * @param {string} username - the username of whom posted the image
 * @returns {Promise<{name: string, profile_image: string}>} - The used data in a formatted version without unnecesary data
 */
export const fetchUserData = (username) =>
    username === '' ? {} : axios.get(`${USERS_ENDPOINT}/${username}`);

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
