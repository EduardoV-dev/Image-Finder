import { imagesResults } from '../../api/__tests__/fixtures';
import { renderWithProviders } from 'test-utils';
import { Home } from '../';

describe('<Home />', () => {
    it('Should render latest images', () => {
        renderWithProviders(<Home />);
    });
});
