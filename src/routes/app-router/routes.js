import { lazy } from 'react';

const Home = lazy(
    /* webpackChunkName: "Home Page" */ () => import('@pages/home'),
);
const Image = lazy(
    /* webpackChunkName: "Image Page" */ () => import('@pages/image'),
);
const NotFound404 = lazy(
    /* webpackChunkName: "404 Page" */ () => import('@pages/404'),
);

const routes = [
    {
        path: '/',
        element: Home,
    },
    {
        path: '/image/:id',
        element: Image,
    },
    {
        path: '*',
        element: NotFound404,
    },
];

export default routes;
