import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from './images';

const store = configureStore({
  reducer: {
    images: imagesReducer,
  },
});

export default store;
