import axios from 'axios';
import {
  URL_BASE,
  ACCESS_KEY
} from '@consts/api';

export const Axios = axios.create({
  baseURL: URL_BASE,
  params: { client_id: ACCESS_KEY },
});