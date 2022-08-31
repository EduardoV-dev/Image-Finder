import { lazy } from 'react';

// Utility for extracting the components from features index entry point.
const lazyImport = (factory, name) =>
    Object.create({
        [name]: lazy(() =>
            factory().then((module) => ({ default: module[name] })),
        ),
    });

const { Home } = lazyImport(() => import('@features/image-gallery'), 'Home');

const { ImageDetails } = lazyImport(
    () => import('@features/single-image'),
    'ImageDetails',
);

const { NotFound404 } = lazyImport(
    () => import('@features/misc'),
    'NotFound404',
);

const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/image/:id',
        element: <ImageDetails />,
    },
    {
        path: '*',
        element: <NotFound404 />,
    },
];

export default routes;
