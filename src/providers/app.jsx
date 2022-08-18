import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';

import { reactQueryClient } from '@lib';
import { Spinner } from '@components';
import { setupStore } from '@store';

const store = setupStore();

const AppProvider = ({ children }) => (
    <Suspense fallback={<Spinner />}>
        <QueryClientProvider client={reactQueryClient}>
            <Provider {...{ store }}>
                <Router>{children}</Router>
            </Provider>

            <ToastContainer />
            <ReactQueryDevtools />
        </QueryClientProvider>
    </Suspense>
);

export default AppProvider;
