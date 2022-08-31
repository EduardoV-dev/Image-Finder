import { createSlice } from '@reduxjs/toolkit';

export const gallerySliceName = 'gallery';

const initialState = {
    term: '',
    page: 1,
    images: [],
    totalPages: 0,
};

const gallerySlice = createSlice({
    name: gallerySliceName,
    initialState,
    reducers: {
        loadTerm: (state, action) => {
            state.term = action.payload;
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
        clearData: (state) => {
            state.images = [];
            state.page = 1;
            state.totalPages = 0;
        },
    },
});

export const { loadTerm, appendImages, nextPage, clearData } =
    gallerySlice.actions;

export const galleryReducer = gallerySlice.reducer;

/* --- SELECTORS --- */

export const selectGalleryState = (state) => state[gallerySliceName];
