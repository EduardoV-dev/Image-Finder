import Card from '../card';
import { render, screen } from '@testing-library/react';

describe('<Card />', () => {
    it('should render correctly', () => {
        render(<Card>Hello world</Card>);

        expect(screen.getByText(/hello world/i)).toBeInTheDocument();
    });

    it('Should display custom classes and styles', () => {
        render(
            <Card className="custom-class" style={{ color: 'red' }}>
                Hello world
            </Card>,
        );

        const card = screen.getByText(/hello world/i);

        expect(card).toHaveClass('custom-class');
        expect(card).toHaveStyle('color: red;');
    });
});
