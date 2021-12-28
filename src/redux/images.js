import { createSlice } from '@reduxjs/toolkit';

const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    isLoading: false,
    images: [],
    error: null,
  },
  reducers: {
    loadImages: (state, action) => {
      state.images = action.payload;
    },
  }
});

export const { loadImages } = imagesSlice.actions;
export default imagesSlice.reducer;