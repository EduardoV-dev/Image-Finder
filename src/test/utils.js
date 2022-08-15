import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
import { render, renderHook } from '@testing-library/react';

import store from '@store/store';
import { reactQueryClient } from '@lib';

/**
 * Wrapper component with the providers used for testing
 *
 * @param {Object} props - Providers props
 * @param {ReactNode} props.children - Element to wrap
 * @param {string[]} props.history - Router history
 *
 * @returns {JSX.Element} - Element wrapped inside the providers
 */
const AllTheProviders = ({ children, history = ['/'] }) => (
    <Provider {...{ store }}>
        <QueryClientProvider client={reactQueryClient}>
            <MemoryRouter initialEntries={history}>{children}</MemoryRouter>
        </QueryClientProvider>
    </Provider>
);

/**
 * Renders a React Element, wrapping the element inside the providers
 *
 * @param {import('react').ReactNode} ui - Element to render
 * @param {import('@testing-library/react').RenderOptions} options - Render options
 *
 * @returns {import('@testing-library/react').RenderResult}
 */
export const renderWithProviders = (ui, options = {}) =>
    render(ui, {
        wrapper: (props) => {
            return <AllTheProviders {...props} {...options.initialProps} />;
        },
        ...options,
    });

/**
 * Renders a react hook, wrapping the hook inside the providers
 *
 * @param {() => any} hook - React hook to render
 * @param {import('@testing-library/react').RenderOptions} options - Render options
 *
 * @returns {import('@testing-library/react').RenderHookResult}
 */
export const renderHookWithProviders = (hook, options = {}) =>
    renderHook(hook, {
        wrapper: (props) => {
            return <AllTheProviders {...props} {...options.initialProps} />;
        },
        ...options,
    });
