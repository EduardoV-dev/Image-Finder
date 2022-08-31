import { useDispatch, useSelector } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import {
    gallerySliceName,
    galleryReducer,
    searchReducer,
} from '@features/image-gallery';
import { photoReducer } from '@features/single-image';
import UIReducer, { uiSliceName } from './slices/ui';

const rootReducer = combineReducers({
    search: searchReducer,
    [gallerySliceName]: galleryReducer,
    picture: photoReducer,
    [uiSliceName]: UIReducer,
});

/* --- SELECTORS --- */

export const selectAllState = (state) => state;

/* --- UTILS --- */

/**
 * Returns the configured store with an optional pre-loading state param
 *
 * @param {object} preloadedState - state changes
 * @returns
 */
export const setupStore = (preloadedState = {}) =>
    configureStore({
        reducer: rootReducer,
        preloadedState,
    });

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
