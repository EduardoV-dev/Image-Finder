import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Spinner } from '@components';
import routes from './routes';

const AppRouter = () => {
    /* --- Components --- */

    const AppRoutes = routes.map(({ element: Page, path }) => (
        <Route {...{ path }} key={path} element={<Page />} />
    ));

    return (
        <BrowserRouter>
            <Suspense fallback={<Spinner />}>
                <Routes>{AppRoutes}</Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default AppRouter;
