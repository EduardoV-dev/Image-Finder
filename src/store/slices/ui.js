import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    /** Window Scroll Y */
    scrollY: 0,
};

const UISlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setScrollY: (state, { payload }) => {
            state.scrollY = payload;
        },
    },
});

export const { setScrollY } = UISlice.actions;

export default UISlice.reducer;
