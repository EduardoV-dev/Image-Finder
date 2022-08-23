import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
import { render, renderHook } from '@testing-library/react';

import { BASE_URL } from '@config';
import { reactQueryClient } from '@lib';
import { setupStore } from '@store';

/**
 * @typedef {Object} CustomRenderReturn
 *
 * @property {import('@reduxjs/toolkit').EnhancedStore<import('@reduxjs/toolkit').CombinedState<any>>} store - configured store
 * @property {import('@testing-library/react').RenderResult} result - render options
 */

/**
 * Wrapper component with the providers used for testing
 *
 * @param {Object} props - Providers props
 * @param {ReactNode} props.children - Element to wrap
 * @param {string[]} props.history - Router history
 * @param {string[]} props.store - Redux store
 *
 * @returns {JSX.Element} - Element wrapped inside the providers
 */
const AllTheProviders = ({ children, history = ['/'], store }) => (
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
 * @returns {CustomRenderReturn}
 */
export const renderWithProviders = (
    ui,
    { initialProps = {}, ...renderOptions } = {},
) => {
    const {
        history = ['/'],
        preloadedState = {},
        store = setupStore(preloadedState),
    } = initialProps;

    return {
        store,
        ...render(ui, {
            wrapper: (props) => {
                return <AllTheProviders {...props} {...{ history, store }} />;
            },
            ...renderOptions,
        }),
    };
};

/**
 * Renders a react hook, wrapping the hook inside the providers
 *
 * @param {() => any} hook - React hook to render
 * @param {import('@testing-library/react').RenderOptions} options - Render options
 *
 * @returns {CustomRenderReturn}
 */
export const renderHookWithProviders = (
    ui,
    { initialProps = {}, ...renderOptions } = {},
) => {
    const {
        history = ['/'],
        preloadedState = {},
        store = setupStore(preloadedState),
    } = initialProps;

    console.log(history, preloadedState, store);

    return {
        store,
        ...renderHook(ui, {
            wrapper: (props) => {
                return <AllTheProviders {...props} {...{ history, store }} />;
            },
            ...renderOptions,
        }),
    };
};

/**
 * Appends the unsplash API baseURL at the beginning of a given path
 *
 * @param {string} path - api path
 *
 * @returns {string} - https://api.unsplash.com/PATH
 */
export const unsplash = (path) => BASE_URL + path;
