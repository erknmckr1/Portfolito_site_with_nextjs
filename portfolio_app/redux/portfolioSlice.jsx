// redux/portfolioSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    theme: 'light-mode',
    toggleBtnTheme:'themeToggleLight',
    mobileNav:false
  },
  reducers: {
    changeTheme: (state, action) => {
      state.theme = state.theme === 'light-mode' ? 'dark-mode' : 'light-mode';
      state.toggleBtnTheme = state.toggleBtnTheme === 'themeToggleLight' ? 'themeToggleDark' : 'themeToggleLight'
    },
    mobileNav:(state,action) => {
      state.mobileNav = state.mobileNav === false ? true : false;
    }
  },
});

export const { changeTheme,mobileNav } = portfolioSlice.actions;
export default portfolioSlice.reducer;
