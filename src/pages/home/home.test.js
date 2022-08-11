import { MemoryRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';

import Home from '.';

describe('<Home /> MODULE', () => {
    it('Renders without crashing', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Home />
            </MemoryRouter>,
        );
    });
});
