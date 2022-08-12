import Axios from 'axios';
import { toast } from 'react-toastify';

const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export const axios = Axios.create({
    baseURL: 'https://api.unsplash.com',
    params: { client_id: ACCESS_KEY },
});

axios.interceptors.response.use(
    (response) => response.data,
    (error) => {
        toast.error(error.message);

        return Promise.reject(error);
    },
);
