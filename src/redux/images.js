import { createSlice } from '@reduxjs/toolkit';

const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    term: '',
    page: 1,
    isLoading: false,
    images: [],
    error: null,
  },
  reducers: {
    loadTerm: (state, action) => {
      state.term = action.payload;
      state.images = [];
    },
    loading: state => {
      state.isLoading = true;
    },
    loadImages: (state, action) => {
      const photos = state.term !== ''
        ? action.payload.images.results
        : action.payload.images;

      state.page = action.payload.page;
      state.isLoading = false;
      state.images = [...state.images, ...photos];
      state.error = null;
    },
    loadError: (state, action) => {
      state = {
        ...state,
        error: action.payload,
        isLoading: false,
      }
      state.error = action.payload;
      state.isLoading = false;
    },
  }
});

export const {
  loadTerm,
  loadImages,
  loading,
  loadError,
} = imagesSlice.actions;
export default imagesSlice.reducer;