import { LATEST_IMAGES, NO_RESULTS } from '@test-utils/mocks/fixtures';
import { fetchLatestImages } from '../';

describe('fetchLatestImages', () => {
    it('Should not return results if term is not empty', async () => {
        const { data: images, totalPages } = await fetchLatestImages({
            page: 1,
            term: 'not-empty',
        });

        expect(images).toEqual(NO_RESULTS.data);
        expect(totalPages).toBe(NO_RESULTS.totalPages);
    });

    it('Should not return results if page is less or equal than 0', async () => {
        const { data: images, totalPages } = await fetchLatestImages({
            page: 0,
            term: '',
        });

        expect(images).toEqual(NO_RESULTS.data);
        expect(totalPages).toBe(NO_RESULTS.totalPages);
    });

    it('Should return formatted images', async () => {
        const API_RESPONSE = {
            data: LATEST_IMAGES,
            totalPages: Infinity,
        };

        const { data: images, totalPages } = await fetchLatestImages({
            page: 1,
            term: '',
        });

        expect(images).toEqual(API_RESPONSE.data);
        expect(totalPages).toBe(API_RESPONSE.totalPages);
    });
});
