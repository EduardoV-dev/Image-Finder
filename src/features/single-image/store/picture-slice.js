import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {},
    user: {},
};

const pictureSlice = createSlice({
    name: 'picture',
    initialState,
    reducers: {
        clearData: (state) => {
            state.data = {};
            state.user = {};
        },
        loadData: (state, action) => {
            state.data = action.payload;
        },
        loadUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { clearData, loadData, loadUser } = pictureSlice.actions;

export const photoReducer = pictureSlice.reducer;

/* --- SELECTORS --- */

export const selectPictureUser = (state) => state.picture.user;
export const selectPictureData = (state) => state.picture.data;
export const selectUserNameFromData = (state) =>
    state.picture.data.username || '';
