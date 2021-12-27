import { createSlice } from '@reduxjs/toolkit';

const mainSlice = createSlice({
  name: 'Main',
  initialState: {
    language: 'es',
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  }
});

export const { changeLanguage } = mainSlice.actions;
export default mainSlice.reducer;