import NotFound404 from '.';
import { render, screen } from '@testing-library/react';

describe('<NotFound404 />', () => {
    it('should render correctly', () => {
        render(<NotFound404 />);

        expect(
            screen.getByText(
                /This page does not exist, perhaps you were looking for cats pictures/i,
            ),
        ).toBeInTheDocument();
    });
});
