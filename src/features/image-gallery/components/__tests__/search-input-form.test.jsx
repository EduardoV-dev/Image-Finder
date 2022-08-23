import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '@test-utils/utils';
import { SearchInputForm } from '../';

describe('<SearchInputForm />', () => {
    /** @type {HTMLElement} */
    let searchInput;

    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        renderWithProviders(<SearchInputForm />);

        searchInput = screen.getByTestId('search-input');
    });

    afterEach(() => {
        // Resets input value
        fireEvent.change(searchInput, {
            target: { value: '' },
        });
    });

    it('Should render without crashing', () => {
        expect(searchInput).toBeInTheDocument();
        expect(searchInput.value).toBe('');
    });

    it('Should type term correctly', () => {
        fireEvent.change(screen.queryByTestId('search-input'), {
            target: { value: 'moon' },
        });

        expect(screen.getByTestId('search-input').value).toBe('moon');
    });

    it('Should submit term correctly', () => {
        const onSubmit = jest.fn();
        const form = screen.getByTestId('search-form');

        form.onsubmit = onSubmit;
        fireEvent.click(screen.getByTestId('search-button'));

        expect(onSubmit).toHaveBeenCalledTimes(1);
    });
});
