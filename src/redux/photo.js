import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  photo: {},
  user: {},
};

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    loadPhoto: (state, action) => {
      state.photo = action.payload;
    },
    loadUser: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const {
  loadPhoto,
  loadUser,
} = photoSlice.actions;
export default photoSlice.reducer;