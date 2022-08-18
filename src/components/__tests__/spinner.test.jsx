import { screen, render } from '@testing-library/react';

import { Spinner } from '..';

describe('<Spinner /> - UI', () => {
    it('Should render the spinner', () => {
        render(<Spinner />);

        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    it('Should not render the spinner', () => {
        render(<Spinner loaded />);

        expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });
});
