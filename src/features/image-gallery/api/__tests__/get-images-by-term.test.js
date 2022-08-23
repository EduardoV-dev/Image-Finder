import { IMAGES_BY_TERM, NO_RESULTS } from '@test-utils/mocks/fixtures';
import { fetchImagesByTerm } from '../';
import { formatImagesData } from '../../utils';

describe('fetchImagesByTerm', () => {
    const API_RESPONSE = {
        results: IMAGES_BY_TERM,
        total_pages: 1,
    };

    it('Should not return results if term is empty', async () => {
        const { data: images, totalPages } = await fetchImagesByTerm({
            page: 1,
            term: '',
        });

        expect(images).toEqual(NO_RESULTS.data);
        expect(totalPages).toEqual(NO_RESULTS.totalPages);
    });

    it('Should not return results if page is less or equal than 0', async () => {
        const { data: images, totalPages } = await fetchImagesByTerm({
            page: 0,
            term: 'not-empty',
        });

        expect(images).toEqual(NO_RESULTS.data);
        expect(totalPages).toEqual(NO_RESULTS.totalPages);
    });

    it('Should return formatted images', async () => {
        const { data: images, totalPages } = await fetchImagesByTerm({
            page: 1,
            term: 'moon',
        });

        expect(images).toEqual(formatImagesData(IMAGES_BY_TERM));
        expect(totalPages).toBe(API_RESPONSE.total_pages);
    });
});
