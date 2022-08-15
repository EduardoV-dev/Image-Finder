import MockAdapter from 'axios-mock-adapter';

import { axios } from '@lib';
import { PHOTOS_ENDPOINT } from '@config/api';
import { fetchLatestImages } from '../';
import { formatImagesData } from '../../utils';
import { imagesResults, noResults } from './fixtures';

describe('fetchLatestImages', () => {
    const API_RESPONSE = {
        data: formatImagesData(imagesResults),
        totalPages: Infinity,
    };

    /** @type {import('axios-mock-adapter').default} */
    let mock;

    beforeEach(() => {
        mock = new MockAdapter(axios);

        mock.onGet(PHOTOS_ENDPOINT).reply(200, imagesResults);
    });

    afterEach(() => mock.reset());

    it('Should not return results if term is not empty', async () => {
        const { data: images, totalPages } = await fetchLatestImages({
            page: 1,
            term: 'not-empty',
        });

        expect(images).toEqual(noResults.data);
        expect(totalPages).toBe(noResults.totalPages);
    });

    it('Should not return results if page is less or equal than 0', async () => {
        const { data: images, totalPages } = await fetchLatestImages({
            page: 0,
            term: '',
        });

        expect(images).toEqual(noResults.data);
        expect(totalPages).toBe(noResults.totalPages);
    });

    it('Should return formatted images', async () => {
        const { data: images, totalPages } = await fetchLatestImages({
            page: 1,
            term: '',
        });

        expect(images).toEqual(formatImagesData(imagesResults));
        expect(totalPages).toBe(API_RESPONSE.totalPages);
    });
});
