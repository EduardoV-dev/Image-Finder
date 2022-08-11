import { useRoutes } from 'react-router-dom';

import routes from './routes';

const AppRouter = () => {
    /* --- Hooks --- */

    const appRoutes = useRoutes(routes);

    return <>{appRoutes}</>;
};

export default AppRouter;
