'use client';
import React, { useState } from 'react';
import { CiSun, CiCloudMoon } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { changeTheme } from '@/redux/portfolioSlice';
import { useSelector } from 'react-redux';
const ThemeButtons = () => {
   const dispatch = useDispatch();
   const theme = useSelector(state => state.portfolio.theme);
   console.log(theme)
   
   // Tema değiştirme işlevi theme actionu nu tetıkle...
   const toggleTheme = () => {
      dispatch(changeTheme());
   };

   return (
      <div>
         <button onClick={toggleTheme} className='flex items-center justify-center  w-[50px] py-2 bg-primary  duration-200 transition-all rounded-md'>
          {/* light */}
            {theme === "light-mode" && (
               <CiSun className='h-[20px] w-[20px] ' />
            )}
            {/* dark */}
            {theme === "dark-mode" && (
               <CiCloudMoon className='h-[20px] w-[20px] ' />
            )}
         </button>
      </div>
   );
};

export default ThemeButtons;

