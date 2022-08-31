import { createSlice } from '@reduxjs/toolkit';

export const uiSliceName = 'ui';

const initialState = {
    /** Window Scroll Y */
    scrollY: 0,
};

const UISlice = createSlice({
    name: uiSliceName,
    initialState,
    reducers: {
        setScrollY: (state, { payload }) => {
            state.scrollY = payload;
        },
    },
});

export const { setScrollY } = UISlice.actions;

export default UISlice.reducer;

/* --- SELECTORS --- */

export const selectScrollY = (state) => state[uiSliceName].scrollY;
