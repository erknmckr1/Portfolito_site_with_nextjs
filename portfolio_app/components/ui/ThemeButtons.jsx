'use client';
import React, { useState } from 'react';
import { CiSun, CiCloudMoon } from "react-icons/ci";

const ThemeButtons = ({theme,setTheme}) => {

   // Tema değiştirme işlevi
   const toggleTheme = () => {
      setTheme(theme === "light-mode" ? "dark-mode" : "light-mode");
   };

   return (
      <div>
         <button onClick={toggleTheme} className='flex items-center justify-center  w-[100px] py-2 bg-amber-600  duration-200 transition-all rounded-md'>
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

