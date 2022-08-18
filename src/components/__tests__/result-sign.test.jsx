import { screen, render } from '@testing-library/react';

import { ResultSign } from '../';
import { ReactComponent as ResultsNotFoundIcon } from '@assets/svg/404.svg';

describe('<ResultSign /> - UI', () => {
    it('Should render correctly', () => {
        render(
            <ResultSign
                children="Success"
                illustration={<ResultsNotFoundIcon title="icon" />}
            />,
        );

        expect(screen.getByText('Success')).toBeInTheDocument();
        expect(screen.getByTitle('icon')).toBeInTheDocument();
    });
});
