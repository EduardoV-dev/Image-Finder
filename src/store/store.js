import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { galleryReducer, searchReducer } from '@features/image-gallery';
import { photoReducer } from '@features/single-image';
import UIReducer from './slices/ui';

const rootReducer = combineReducers({
    search: searchReducer,
    gallery: galleryReducer,
    picture: photoReducer,
    ui: UIReducer,
});

/**
 * Returns the configured store with an optional pre-loadign state param
 *
 * @param {object} preloadedState - state changes
 * @returns
 */
export const setupStore = (preloadedState = {}) =>
    configureStore({
        reducer: rootReducer,
        preloadedState,
    });
