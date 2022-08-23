import { screen, fireEvent, act } from '@testing-library/react';

import { LATEST_IMAGES, IMAGES_BY_TERM } from '@test-utils/mocks/fixtures';
import { renderWithProviders } from '@test-utils/utils';
import { setupStore } from '@store';
import { loadTerm } from '@features/image-gallery/store';
import { Home } from '../';

describe('<Home />', () => {
    it('Should render latest images and form elements', async () => {
        const { store } = renderWithProviders(<Home />);

        // Detects that images are being rendered
        expect(await screen.findAllByRole('progressbar')).toHaveLength(
            LATEST_IMAGES.length,
        );

        expect(store.getState().gallery.term).toBe('');
        expect(store.getState().search.keyword).toBe('');

        expect(screen.getByTestId('search-label')).toBeInTheDocument();
        expect(screen.getByTestId('search-input')).toBeInTheDocument();
        expect(screen.getByTestId('search-button')).toBeInTheDocument();
    });

    it('Should render images by term from query string', async () => {
        const query = 'moon';

        const { store } = renderWithProviders(<Home />, {
            initialProps: {
                history: [`/?query=${query}`],
            },
        });

        expect(await screen.findAllByRole('progressbar')).toHaveLength(
            IMAGES_BY_TERM.length,
        );
        expect(store.getState().gallery.term).toBe(query);
        expect(store.getState().search.keyword).toBe(query);
    });

    it('Should submit a term for rendering latest images', async () => {
        renderWithProviders(<Home />);

        expect(await screen.findAllByRole('progressbar')).toHaveLength(
            LATEST_IMAGES.length,
        );

        const searchInput = screen.getByTestId('search-input');

        fireEvent.change(searchInput, {
            target: { value: 'Moon and Sun' },
        });
        fireEvent.click(screen.getByTestId('search-button'));

        // Will render the images by term
        expect(await screen.findAllByRole('progressbar')).toHaveLength(
            IMAGES_BY_TERM.length,
        );
    });

    it('Should clear the term and get latest images', async () => {
        const store = setupStore();
        store.dispatch(loadTerm('Moon'));

        renderWithProviders(<Home />, { initialProps: { store } });

        expect(await screen.findAllByRole('progressbar')).toHaveLength(
            IMAGES_BY_TERM.length,
        );

        act(() => store.dispatch(loadTerm('')));

        expect(await screen.findAllByRole('progressbar')).toHaveLength(
            LATEST_IMAGES.length,
        );
    });
});
