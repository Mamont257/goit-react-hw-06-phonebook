import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',

  reducers: {
    filterContact(state, action) {},
  },
});

export const filterReducer = filterSlice.reducer;
