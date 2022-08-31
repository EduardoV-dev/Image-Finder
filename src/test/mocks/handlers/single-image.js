import { rest } from 'msw';

import { unsplash } from '@test-utils/utils';
import { PHOTOS_ENDPOINT } from '@config';
import { USERS_ENDPOINT } from '@features/single-image/api';
import { IMAGE, USER } from '../fixtures';

export const getImageById = rest.get(
    unsplash(`${PHOTOS_ENDPOINT}/:imageId`),
    (req, res, ctx) => res(ctx.json(IMAGE)),
);

export const getUser = rest.get(
    unsplash(`${USERS_ENDPOINT}/:userId`),
    (req, res, ctx) => res(ctx.json(USER)),
);

export const handlers = [getImageById, getUser];
