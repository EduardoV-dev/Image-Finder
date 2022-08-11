import { QueryClient } from 'react-query';

const queryConfig = {
    queries: {
        refetchOnWindowFocus: false,
        retry: false,
    },
};

const client = new QueryClient({ defaultOptions: queryConfig });

export default client;
