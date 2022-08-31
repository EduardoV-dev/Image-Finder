import { rest } from 'msw';
import queryString from 'query-string';

import { unsplash } from '@test-utils/utils';
import { LATEST_IMAGES, IMAGES_BY_TERM, NO_RESULTS } from '../fixtures';
import {
    LATEST_IMAGES_ENDPOINT,
    IMAGES_BY_TERM_ENDPOINT,
} from '@features/image-gallery/api';

const getLatestImages = rest.get(
    unsplash(LATEST_IMAGES_ENDPOINT),
    (req, res, ctx) => res(ctx.json(LATEST_IMAGES)),
);

const getImagesByTerm = rest.get(
    unsplash(IMAGES_BY_TERM_ENDPOINT),
    (req, res, ctx) => {
        const { query } = queryString.parse(req.url.search);

        // If query is longer than 10 characters, should return images, else, should not return images
        const shouldReturnImages = query.length <= 10;

        const API_RESPONSE = {
            results: shouldReturnImages ? IMAGES_BY_TERM : NO_RESULTS.data,
            total_pages: shouldReturnImages ? 1 : NO_RESULTS.totalPages,
        };

        return res(ctx.json(API_RESPONSE));
    },
);

export const handlers = [getLatestImages, getImagesByTerm];
