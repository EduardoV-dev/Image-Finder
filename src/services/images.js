import { Axios } from './config';
import {
  PHOTOS_ENDPOINT,
  IMAGES_PER_PAGE,
  SEARCH_PHOTOS_ENDPOINT,
} from '@consts/api';

export const fetchLatestImages = async page => {
  const data = await Axios.get(`/${PHOTOS_ENDPOINT}`, {
    params: {
      page,
      per_page: IMAGES_PER_PAGE
    },
  });
  return data.data;
}

export const fetchImagesByTerm = async (term, page) => {
  const data = await Axios.get(`/${SEARCH_PHOTOS_ENDPOINT}`, {
    params: {
      query: term,
      per_page: IMAGES_PER_PAGE,
      page,
    }
  });
  return data.data;
}