import { createSlice } from '@reduxjs/toolkit';

const imagesSlice = createSlice({
    name: 'images',
    initialState: {
        term: '',
        page: 1,
        images: [],
        totalPages: 0,
    },
    reducers: {
        loadTerm: (state, action) => {
            state.term = action.payload;
            state.images = [];
            state.page = 1;
            state.totalPages = 0;
        },
        appendImages: (state, action) => {
            state.images = [...state.images, ...action.payload.images];
            state.totalPages = action.payload.totalPages;
        },
        nextPage: (state) => {
            state.page =
                state.page + 1 <= state.totalPages
                    ? state.page + 1
                    : state.page;
        },
    },
});

export const { loadTerm, appendImages, nextPage } = imagesSlice.actions;
export default imagesSlice.reducer;
