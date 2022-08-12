import { configureStore } from '@reduxjs/toolkit';

import { galleryReducer, searchReducer } from '@features/image-gallery';
import { photoReducer } from '@features/single-image';
import UIReducer from './slices/ui';

const store = configureStore({
    reducer: {
        search: searchReducer,
        gallery: galleryReducer,
        picture: photoReducer,
        ui: UIReducer,
    },
});

export default store;
