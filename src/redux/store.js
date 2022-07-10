import { configureStore } from '@reduxjs/toolkit';
import formReducer from './form';
import imagesReducer from './images';
import photoReducer from './photo';
import UIReducer from './ui';

const store = configureStore({
    reducer: {
        form: formReducer,
        images: imagesReducer,
        photo: photoReducer,
        ui: UIReducer,
    },
});

export default store;
