import { setupServer } from 'msw/node';

import { handlers } from './handlers';

/**
 * A server with all the handlers used across the application
 */
export const server = setupServer(...handlers);
