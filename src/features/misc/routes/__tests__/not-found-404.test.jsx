import { screen } from '@testing-library/react';

import { renderWithProviders } from '@test-utils/utils';
import { NotFound404 } from '../';

describe('<NotFound404 />', () => {
    it('Should render without crashing', () => {
        renderWithProviders(<NotFound404 />);

        expect(
            screen.getByTestId('page-not-found-illustration'),
        ).toBeInTheDocument();

        expect(screen.getByTestId('page-not-found-link')).toBeInTheDocument();
    });
});
