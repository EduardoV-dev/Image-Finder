import { axios } from '@lib';
import MockAdapter from 'axios-mock-adapter';
import { waitFor } from '@testing-library/react';
import { renderHookWithProviders } from 'test-utils';
import { useGallery } from '../';
import { PHOTOS_ENDPOINT } from '@config/api';
import { imagesResults } from './fixtures';

describe('useGallery', () => {
    /** @type {import('axios-mock-adapter').default} */
    let mock;

    beforeEach(() => {
        mock = new MockAdapter(axios);

        mock.onGet(`/${PHOTOS_ENDPOINT}`).reply(200, imagesResults);
    });

    afterEach(() => mock.reset());

    it('Should return latest images', async () => {
        // const { result } = renderHookWithProviders(() =>
        //     useGallery(),
        // );
        // await waitFor(() => result.current.isLoading);
        // console.log(result.current);
        // expect(result.current.images.length).toBe(30);
    });
});
