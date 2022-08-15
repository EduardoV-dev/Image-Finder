import { screen, render } from '@testing-library/react';

import { ResultSign } from '../';

describe('<ResultSign /> - UI', () => {
    it('Should render correctly', () => {
        render(
            <ResultSign
                children="Success"
                illustration={<svg title="icon" />}
            />,
        );

        expect(screen.getByText('Success')).toBeInTheDocument();
        expect(screen.getByTitle('icon')).toBeInTheDocument();
    });
});
