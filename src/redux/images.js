import { createSlice } from '@reduxjs/toolkit';
import { hasNextPage } from '@utils/check';

const imagesSlice = createSlice({
    name: 'images',
    initialState: {
        term: '',
        page: 1,
        isLoading: false,
        images: [],
        error: null,
        totalPages: 0,
    },
    reducers: {
        loadTerm: (state, action) => {
            state.term = action.payload;
            state.images = [];
            state.page = 1;
            state.error = null;
            state.totalPages = 0;
        },
        loading: (state) => {
            state.isLoading = true;
        },
        loadImages: (state, action) => {
            state.images = [...state.images, ...action.payload.data];
            state.totalPages = action.payload.totalPages;
            state.isLoading = false;
            state.error = null;
        },
        loadError: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        loadMoreImages: (state) => {
            state.page = hasNextPage(state.page, state.totalPages)
                ? state.page + 1
                : state.page;
        },
    },
});

export const { loadTerm, loadImages, loading, loadError, loadMoreImages } =
    imagesSlice.actions;
export default imagesSlice.reducer;
