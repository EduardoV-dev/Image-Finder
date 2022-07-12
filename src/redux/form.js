import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    keyword: '',
    firstRender: true,
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        keywordOnChange: (state, action) => {
            state.keyword = action.payload;
        },
        setFirstRender: (state) => {
            state.firstRender = false;
        },
    },
});

export const { keywordOnChange, setFirstRender } = formSlice.actions;
export default formSlice.reducer;
