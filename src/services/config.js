import axios from 'axios';

const BASE_URL = 'https://api.unsplash.com';

export const Axios = axios.create({
    baseURL: BASE_URL,
    params: { client_id: process.env.REACT_APP_UNSPLASH_ACCESS_KEY },
});
