'use-client'

import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
function Section() {
  const theme = useSelector(state => state.portfolio.theme)

  return (
    <motion.section className={` h-[84vh] py-12 xl:py-24 xl:pt-24 font-mono ${theme} transition-all duration-500`}>
    <div className='container mx-auto'>
        <div className='flex sm:flex-row flex-col justify-between gap-x-8'>
            {/* text areas */}
            <div className='flex flex-col gap-y-4 justify-center text-center'>
                <div className='text-[25px] font-semibold text-primary uppercase'>Jr. Web Developer</div>
                <h1 className='title xl:w-[600px] mx-auto leading-[5rem]'>HH, I'm </h1>
                <p className=' text-sm line-clamp-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, dicta officiis? Nemo quisquam officiis obcaecati temporibus culpa facilis rerum voluptatem laudantium vitae omnis iure nam, cum enim voluptatibus, illum eligendi!</p>
            </div>
            {/* image */}
            <div className=''>image</div>
        </div>
        <div className='hidden md:flex absolute left-1/2 bottom-[100px] xl:bottom-12 animate-bounce'>
            <IoIosArrowDown className='text-primary text-[40px]'/>
        </div>
    </div>
    </motion.section>
  )
}

export default Section
