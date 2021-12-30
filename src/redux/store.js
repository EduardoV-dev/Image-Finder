import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from './images';
import formReducer from './form';

const store = configureStore({
  reducer: {
    images: imagesReducer,
    form: formReducer,
  },
});

export default store;
