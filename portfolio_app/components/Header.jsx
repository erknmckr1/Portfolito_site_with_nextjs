import React, { useEffect, useState } from "react";
import ThemeButtons from "./ui/ThemeButtons";
import Link from "next/link";
import Logo from "./ui/Logo";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

function Header({ theme, setTheme }) {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);

  

  useEffect(() => {
    const handleScroll = () => {
      // Tarayıcı scroll olduğunda yapılacak işlemler
      if (window.scrollY > 100) {
        setScrolled(true); // ScrollY 50'den büyükse scrolled durumunu true yap
      } else {
        setScrolled(false); // ScrollY 50'den küçükse scrolled durumunu false yap
      }
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  
 
  return (
    <div  className={`transition-all duration-500 sticky  w-screen top-0 z-50  ${scrolled ? 'border-b shadow-lg py-4 bg-white' : 'py-6'}`}>
      {/* container sayfa genıslıgı , mx-auto yatayda ortala... */}
      <div className="container mx-auto  ">
        <div className="flex justify-between items-center">
          {/* logo left side  */}
          <Logo/>
          {/* right side */}
          <div className="flex items-center gap-x-8">
            {/* nav etıketını farklı bır komponent olarak olusturup ımport edebılırdık. */}
            <nav className="hidden xl:flex gap-x-10 items-center justify-center">
              <Link className="relative hover:text-red-700 transition-all" href="/">
                { path === "/" &&  (<motion.span 
                initial={{y:'-100%',backgroundColor:"#D97706"}}
                animate={{y:0,backgroundColor:"#D97706"}}
                transition={{duration:0.5}}
                layoutId="underline"
                className="absolute left-0 top-full h-[2px] bg-black w-full"
                />)}
                Home
              </Link>
              <Link className="relative hover:text-red-700 transition-all" href="/projects">
                { path === "/projects" &&  (<motion.span 
                initial={{y:'-100%',backgroundColor:"#D97706"}}
                animate={{y:0,backgroundColor:"#D97706"}}
                transition={{duration:0.5}}
                layoutId="underline"
                className="absolute left-0 top-full h-[2px]  w-full"
                />)}
                My Projects
              </Link>
              <Link className="relative hover:text-red-700 transition-all" href="/contact">
                { path === "/contact" &&  (<motion.span 
                initial={{y:'-100%',backgroundColor:"#D97706"}}
                animate={{y:0,backgroundColor:"#D97706"}}
                transition={{duration:0.5}}
                layoutId="underline"
                className="absolute left-0 top-full h-[2px]  w-full"
                
                />)}
                Contact
              </Link>
            </nav>
            {/*//! mobile menu */}
            <nav className="xl:hidden">
              Mobile Nav
            </nav>
            <ThemeButtons theme={theme} setTheme={setTheme} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
