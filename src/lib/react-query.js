import { QueryClient } from 'react-query';

const queryConfig = {
    queries: {
        refetchOnWindowFocus: false,
        retry: false,
    },
};

export const reactQueryClient = new QueryClient({
    defaultOptions: queryConfig,
});
