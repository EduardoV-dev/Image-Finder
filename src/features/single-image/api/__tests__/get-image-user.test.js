import { fetchUserData } from '../';
import { USER } from '@test-utils/mocks/fixtures';

describe('fetchUserData', () => {
    it('Should return formatted user data', async () => {
        const user = await fetchUserData('anyuserid');

        expect(user).not.toEqual({});
        expect(user).toEqual(USER);
    });
});
