import { QueryClient } from 'react-query';
import { toast } from 'react-toastify';

/**
 * @type {import('react-query').DefaultOptions<unknown>}
 */
const queryConfig = {
    queries: {
        refetchOnWindowFocus: false,
        retry: false,
        onError: (errorMessage) => {
            console.log(
                '%c Error from react-query config, comment this log on production',
                'color: red; background: black;',
            );

            toast.error(`Something went wrong: ${errorMessage}`);
        },
    },
};

export const reactQueryClient = new QueryClient({
    defaultOptions: queryConfig,
});
