"use-client";

import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Link from "next/link";
import { GrContact } from "react-icons/gr";
import { FaDownload } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Image from "next/image";
import { GiStrikingClamps } from "react-icons/gi";
import CountUp from "react-countup";
function Section() {
  const theme = useSelector((state) => state.portfolio.theme);
  const mobileNav = useSelector(state => state.portfolio.mobileNav)
 
  const iconList = [
    {
      path: "/",
      name: <FaLinkedinIn />,
    },
    {
      path: "/",
      name: <FaGithub />,
    },
    {
      path: "/",
      name: <SiGmail />,
    },
  ];

  return (
    // mobile nav acıksa sayfa blur olacak sekılde ayarlandı. 
    <motion.section
      className={` h-[84vh] py-12 xl:py-24 xl:pt-24 font-mono  transition-all duration-500 ${mobileNav ? "blur-md" : "blur-none"}`} 
    >
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col justify-between items-center gap-x-8">
          {/* text areas */}
          <div className="flex flex-col gap-y-4 justify-center  text-center max-w-[600px] mx-auto xl:mx-0 xl:text-left">
            {/* position text */}
            <div className="text-[25px] font-semibold text-primary uppercase">
              Jr. Web Developer
            </div>
            {/* who */}
            <h1 className="title leading-[5rem]">HH, I'm Lorem Ipsum </h1>
            {/* description text */}
            <p className=" mb-10 text-md line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
              dicta officiis? Nemo quisquam officiis obcaecati temporibus culpa
              facilis rerum voluptatem laudantium vitae omnis iure nam, cum enim
              voluptatibus, illum eligendi!
            </p>
            {/* buttons */}
            <div className="flex  gap-x-3 lg:justify-start justify-center ">
              <Link href="/contact">
                <button className="bg-primary hover:scale-110 shadow-2xl animate-bounce transition-all p-2 flex items-center gap-x-3 rounded-md">
                  Contact Me <GrContact />{" "}
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-secondary  underline tracking-wider  hover:scale-110 shadow-2xl transition-all p-2 flex items-center gap-x-3 rounded-md">
                  Download CV <FaDownload />{" "}
                </button>
              </Link>
            </div>
            {/* buttons */}
            {/* social icons */}
            <div className="fixed top-1/2 z-50 right-0 md:mr-5 mr-3 transition-all">
              <div className=" flex flex-col gap-y-5 text-xl">
                {iconList.map((icon, index) => {
                  return (
                    <Link
                      key={index}
                      className="text-xl hover:text-secondary"
                      href={icon.path}
                    >
                      {icon.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          {/* social icons end */}
          {/* image area */}
          <div className="lg:flex justify-between w-[550px] hidden rounded-md">
            {/* experiance card start komponent halıne getır karmasıklıgı azalt. */}
            <div className="w-[180px] h-[50px] z-10 bg-fuchsia-50  p-1 shadow-2xl flex items-center justify-center rounded-md text-red-600 gap-x-4">
              <div className="flex items-center gap-x-3">
                <GiStrikingClamps className="text-[25px] " />
                <div>
                  <CountUp end={100} duration={5} className="text-2xl" />
                </div>
                <div className="text-xs font-bold">Experiance</div>
              </div>
            </div>
            {/* experiance card end */}
            <div className="items-center md:relative xl:right-[100px] border-primary border-[3px] w-[300px] h-[300px] flex justify-center mt-10 lg:mt-0">
              <div className="border-secondary border-[3px] w-[300px] md:absolute right-4 top-4 h-[300px]"></div>
              <div className=" md:absolute right-8 top-8 hover-2xl w-full h-full   ">
                {/* img */}
                <Image alt="" width={300} height={300} src="/avatar2.jpg" />
              </div>
            </div>
          </div>
          {/* image area end */}
        </div>
        <div className="hidden md:flex absolute left-1/2 bottom-[100px] xl:bottom-12 animate-bounce">
          <IoIosArrowDown className="text-primary text-[40px]" />
        </div>
      </div>
    </motion.section>
  );
}

export default Section;
