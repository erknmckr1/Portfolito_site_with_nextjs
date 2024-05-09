'use client';
import React, { useState } from 'react';
import { CiSun, CiCloudMoon } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { changeTheme } from '@/redux/portfolioSlice';
import { useSelector } from 'react-redux';
const ThemeButtons = () => {
   const dispatch = useDispatch();
   const theme = useSelector(state => state.portfolio.theme);
   const toggleBtnTheme = useSelector(state=> state.portfolio.toggleBtnTheme)
   
   // Tema değiştirme işlevi theme actionu nu tetıkle...
   const toggleTheme = () => {
      dispatch(changeTheme());
   };

   return (
      <div>
         <button onClick={toggleTheme} className={`flex items-center justify-center bg-primary  w-[50px] py-2 ${toggleBtnTheme}  duration-200 transition-all rounded-md`}>
          {/* light */}
            {theme === "light-mode" && (
               <CiSun className={`h-[20px] w-[20px] ${toggleBtnTheme}`}  />
            )}
            {/* dark */}
            {theme === "dark-mode" && (
               <CiCloudMoon className='h-[20px] w-[20px]  ' />
            )}
         </button>
      </div>
   );
};

export default ThemeButtons;

