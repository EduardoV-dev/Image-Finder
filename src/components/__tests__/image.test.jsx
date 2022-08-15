import { render, screen } from '@testing-library/react';
import { Image } from '../';

describe('<Image /> - UI', () => {
    it('Should render correctly', async () => {
        const onLoad = jest.fn();

        render(
            <Image
                src="https://placekitten.com/150"
                alt="Kitten"
                {...{ onLoad }}
            />,
        );

        expect(screen.getByAltText('Kitten')).toBeInTheDocument();
    });
});
