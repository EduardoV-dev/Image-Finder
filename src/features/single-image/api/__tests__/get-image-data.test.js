import { IMAGE } from '@test-utils/mocks/fixtures';
import { fetchImageById } from '../';

describe('fetchImageById', () => {
    it('Should return formatted data', async () => {
        const result = await fetchImageById('anykindof_id');

        expect(result).not.toEqual({});
        expect(result).toEqual(IMAGE);
    });
});
