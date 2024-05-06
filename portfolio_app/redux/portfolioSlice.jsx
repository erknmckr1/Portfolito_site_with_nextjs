// redux/portfolioSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    theme: 'light-mode',
    headerTheme:'header-light'
  },
  reducers: {
    changeTheme: (state, action) => {
      state.theme = state.theme === 'light-mode' ? 'dark-mode' : 'light-mode';
      state.headerTheme = state.headerTheme === 'header-light' ? 'header-dark' : 'header-light'
    },
  },
});

export const { changeTheme } = portfolioSlice.actions;
export default portfolioSlice.reducer;
