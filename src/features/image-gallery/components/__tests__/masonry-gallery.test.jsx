import { screen, act } from '@testing-library/react';

import { renderWithProviders } from '@test-utils/utils';
import { LATEST_IMAGES, IMAGES_BY_TERM } from '@test-utils/mocks/fixtures';
import { loadTerm } from '@features/image-gallery/store';
import { setupStore } from '@store';
import { MasonryGallery } from '../';

describe('<MasonryGallery />', () => {
    it('Should render the latest images', async () => {
        const latestResults = LATEST_IMAGES.length;
        const { store } = renderWithProviders(<MasonryGallery />);

        // Empty string calls for the latest images
        expect(store.getState().gallery.term).toBe('');
        // Means that no images are loaded yet
        expect(screen.getByText(/0/i)).toBeInTheDocument();

        // Should find the spinners for the images
        expect(await screen.findAllByRole('progressbar')).toHaveLength(
            latestResults,
        );

        // Should get the images
        expect(screen.getAllByRole('img')).toHaveLength(latestResults);

        /* --- Images by Term --- */

        act(() => store.dispatch(loadTerm('moon')));

        const byTermResults = IMAGES_BY_TERM.length;

        expect(screen.getByText(/0/i)).toBeInTheDocument();
        expect(await screen.findAllByRole('progressbar')).toHaveLength(
            byTermResults,
        );
        expect(screen.getAllByRole('img')).toHaveLength(byTermResults);
    });

    it('Should render the images by term', async () => {
        const store = setupStore();
        store.dispatch(loadTerm('moon'));

        renderWithProviders(<MasonryGallery />, { initialProps: { store } });

        const byTermResults = IMAGES_BY_TERM.length;

        expect(screen.getByText(/0/i)).toBeInTheDocument();
        expect(await screen.findAllByRole('progressbar')).toHaveLength(
            byTermResults,
        );
        expect(screen.getAllByRole('img')).toHaveLength(byTermResults);

        // It should render the no more results sign
        expect(screen.getByTestId('no-more-results')).toBeInTheDocument();
    });

    it('Should render the "no results sign"', async () => {
        const store = setupStore();
        store.dispatch(loadTerm('term-that-is-long'));

        renderWithProviders(<MasonryGallery />, { initialProps: { store } });

        expect(await screen.findByTestId('no-results')).toBeInTheDocument();
        // Means that no images are being rendered
        expect(screen.getByText(/0/i)).toBeInTheDocument();
    });
});
