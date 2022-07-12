import { formatImagesData } from '@utils/formatData';
import { Axios } from './config';

const PHOTOS_ENDPOINT = 'photos';
const SEARCH_PHOTOS_ENDPOINT = 'search/photos';
const IMAGES_PER_PAGE = 30;

export const fetchLatestImages = async (page) => {
    const { data: images } = await Axios.get(`/${PHOTOS_ENDPOINT}`, {
        params: {
            page,
            per_page: IMAGES_PER_PAGE,
        },
    });

    return {
        data: formatImagesData(images),
        totalPages: Infinity,
    };
};

export const fetchImagesByTerm = async (term, page) => {
    const data = await Axios.get(`/${SEARCH_PHOTOS_ENDPOINT}`, {
        params: {
            query: term,
            per_page: IMAGES_PER_PAGE,
            page,
        },
    });

    return {
        data: formatImagesData(data.data.results),
        totalPages: data.data.total_pages,
    };
};

export const fetchImageById = async (id) => {
    const data = await Axios.get(`/${PHOTOS_ENDPOINT}/${id}`);

    return data;
};
