import MockAdapter from 'axios-mock-adapter';

import { axios } from '@lib';
import { imagesResults, noResults } from './fixtures';
import { fetchImagesByTerm, SEARCH_PHOTOS_ENDPOINT } from '../';
import { formatImagesData } from '../../utils';

describe('fetchImagesByTerm', () => {
    const API_RESPONSE = {
        results: imagesResults,
        total_pages: 1,
    };

    /** @type {import('axios-mock-adapter').default} */
    let mock;

    beforeEach(() => {
        mock = new MockAdapter(axios);

        mock.onGet(SEARCH_PHOTOS_ENDPOINT).reply(200, API_RESPONSE);
    });

    afterEach(() => mock.reset());

    it('Should not return results if term is empty', async () => {
        const { data: images, totalPages } = await fetchImagesByTerm({
            page: 1,
            term: '',
        });

        expect(images).toEqual(noResults.data);
        expect(totalPages).toEqual(noResults.totalPages);
    });

    it('Should not return results if page is less or equal than 0', async () => {
        const { data: images, totalPages } = await fetchImagesByTerm({
            page: 0,
            term: 'not-empty',
        });

        expect(images).toEqual(noResults.data);
        expect(totalPages).toEqual(noResults.totalPages);
    });

    it('Should return formatted images', async () => {
        const { data: images, totalPages } = await fetchImagesByTerm({
            page: 1,
            term: 'moon',
        });

        expect(images).toEqual(formatImagesData(imagesResults));
        expect(totalPages).toBe(API_RESPONSE.total_pages);
    });
});
