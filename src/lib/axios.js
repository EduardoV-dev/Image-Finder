import Axios from 'axios';
import { toast } from 'react-toastify';

import { BASE_URL } from '@config';

const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export const axios = Axios.create({
    baseURL: BASE_URL,
    params: { client_id: ACCESS_KEY },
});

axios.interceptors.response.use(
    (response) => response.data,
    (error) => {
        toast.error(error.message);

        return Promise.reject(error);
    },
);
