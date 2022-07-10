import { Axios } from './config';

const USERS_ENDPOINT = 'users';

export const fetchUserData = async (username) =>
    (await Axios.get(`/${USERS_ENDPOINT}/${username}`)).data;
