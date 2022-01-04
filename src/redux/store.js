import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from './images';
import formReducer from './form';
import photoReducer from './photo';

const store = configureStore({
  reducer: {
    images: imagesReducer,
    form: formReducer,
    photo: photoReducer,
  },
});

export default store;
