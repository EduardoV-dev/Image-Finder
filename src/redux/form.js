import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  keyword: '',
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    keywordOnChange: (state, action) => {
      state.keyword = action.payload;
    }
  },
});

export const {
  keywordOnChange,
} = formSlice.actions;
export default formSlice.reducer;