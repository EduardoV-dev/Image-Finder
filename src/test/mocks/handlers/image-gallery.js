import { rest } from 'msw';

import { unsplash } from '@test-utils/utils';
import { LATEST_IMAGES, IMAGES_BY_TERM, NO_RESULTS } from '../fixtures';
import {
    LATEST_IMAGES_ENDPOINT,
    IMAGES_BY_TERM_ENDPOINT,
} from '@features/image-gallery/api';

const getLatestImages = rest.get(
    unsplash(LATEST_IMAGES_ENDPOINT),
    (req, res, ctx) => res(ctx.json(LATEST_IMAGES), ctx.delay(150)),
);

const getImagesByTerm = rest.get(
    unsplash(IMAGES_BY_TERM_ENDPOINT),
    (req, res, ctx) => {
        // Checks if it has 'no-results' inside URL query
        const shouldReturnImages = !req.url.toString().includes('no-results');

        const API_RESPONSE = {
            results: shouldReturnImages ? IMAGES_BY_TERM : NO_RESULTS.data,
            total_pages: shouldReturnImages ? 1 : NO_RESULTS.totalPages,
        };

        return res(ctx.json(API_RESPONSE), ctx.delay(150));
    },
);

export const handlers = [getLatestImages, getImagesByTerm];
