import { Axios } from './config';

const USERS_ENDPOINT = 'users';

/**
 * Fetches single user data by its username.
 * k
 * @param {string} username - the username whom posted the image
 * @returns {object} - The used data in a formatted version without unnecesary data
 */
export const fetchUserData = async (username) => {
    const user = (await Axios.get(`/${USERS_ENDPOINT}/${username}`)).data;

    return {
        name: user.name,
        profile_image: user.profile_image.medium,
    };
};
