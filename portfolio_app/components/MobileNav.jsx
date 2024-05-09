'use client'
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "./ui/Logo";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { mobileNav } from "@/redux/portfolioSlice";
import { useEffect } from "react";
function MobileNav() {
  const dispatch = useDispatch();

  const theme = useSelector(state => state.portfolio.theme)
  const mobileeNav = useSelector(state => state.portfolio.mobileNav)
  const changeMobileNavState = () => {
    dispatch(mobileNav())
  }




  useEffect(() => {
    // Ekran boyutu 768px'den büyük veya eşitse ve mobileNav true ise
    if (window.innerWidth >= 768 && mobileeNav) {
      changeMobileNavState(); // mobileNav durumunu false yap
    }
    console.log(mobileeNav)
  }, [mobileeNav]); // mobileeNav durumu değiştiğinde bu etkiyi tetikle

  return (
    <nav className={`md:hidden `}>
      <GiHamburgerMenu className="text-[22px]" onClick={changeMobileNavState} />
      <div
        className={`fixed top-0 right-0 ${theme} z-10 h-screen w-[70%] max-w-[300px] p-6 transform transition-transform ${
          mobileeNav ? "translate-x-0" : "translate-x-full"
        }`} 
      >
        <div className="w-full flex flex-col  h-full justify-around ">
          <div className="w-full border-b  border-black flex items-center justify-between">
            <span
              onClick={changeMobileNavState}
              className=" text-[22px] font-semibold"
            >
              X
            </span>
            <Logo />
          </div>
          <div className="flex flex-col gap-y-8 text-[25px] mt-12">
              <Link href="/" >Home</Link>
              <Link href="/" >Project</Link>
              <Link href="/" >Contact</Link>
          </div>
          <div className="border-t-2 border-black w-full">
            EC
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MobileNav;
