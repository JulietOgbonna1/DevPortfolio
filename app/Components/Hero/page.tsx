'use client'
import React from 'react'
import logo from '../../public/logo.png'
import Image from "next/image";
import { IoMoonSharp } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa";
import { BsBrightnessHigh } from "react-icons/bs";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from  "../themeContext";
import { img } from 'framer-motion/client';
import Navbar from './navmobile';

const Hero = () => {
     const { lightMode, toggleTheme } = useTheme();
    return (
        <div className={`${lightMode ? 'bg-white text-black' : 'bg-[#101F22] text-white'} min-h-screen transition-colors duration-300`}>
       
         <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
        <Navbar lightMode={lightMode} toggleTheme={toggleTheme} />
                
        </motion.div>
            
            <section className="herosection hidden md:block">
                <div className='heroflex flex mt-2 gap-52 ml-15'>
                    <motion.div
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeInOut" }}
>
                    <div className='mt-20'>
                        
                        <h1 className='text-6xl font-bold leading-tight pb-3'>
                              <TypeAnimation
        sequence={[
          'Crafting Digital', 
          2000,                  
          
        ]}
        speed={50}               
        repeat={Infinity}       
        wrapper="span"           
      /><br /><span className='text-[#10B981]'>
        <TypeAnimation
        sequence={[
          'Experiences', 
          2000, 
                           
          
        ]}
        speed={50}               
        repeat={Infinity}        
        wrapper="span"           
      /></span></h1>
                        <p className='pb-6 text-[#94A3B8] leading-normal'>Full-stack Web Developer specialized in React & Node.js. <br />
                            Building scalable applications with modern technology <br />
                            stacks.</p>
                             <motion.div
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.3, ease: "easeInOut" }}
>
                        <button className=" flex items-center gap-3 p-2 px-4 py-2 bg-[#10B981] hover:bg-green-700 text-white rounded-md transition">Download CV <FaArrowDown /></button>
                        </motion.div>
                    </div>
</motion.div>
           
                    
                    <div>
                        <img src="/heroimg.png" alt="Hero Image" width={530} height={530} className='w-full h-11/12 transition-transform duration-300 hover:scale-110 hover:opacity-70'/>
                    </div>

                </div>
            </section>



            <section className="herosection1 md:hidden">
                <div className='heroflex flex flex-col mt-2 gap-52 ml-8'>
                    <motion.div
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeInOut" }}
>                   <div>
                        <img src="/heroimg.png" alt="Hero Image" width={530} height={530} className='w-9/10 h-11/12 transition-transform duration-300 hover:scale-110 hover:opacity-70'/>
                    </div>
                    <div className='mt-20'>
                        
                        <h1 className='text-4xl font-bold leading-tight pb-3'>
                              <TypeAnimation
        sequence={[
          'Crafting Digital', 
          2000,                  
          
        ]}
        speed={50}               
        repeat={Infinity}       
        wrapper="span"           
      /><br /><span className='text-[#10B981]'>
        <TypeAnimation
        sequence={[
          'Experiences', 
          2000, 
                           
          
        ]}
        speed={50}               
        repeat={Infinity}        
        wrapper="span"           
      /></span></h1>
                        <p className='pb-6 text-[#94A3B8] leading-normal tracking-wide'>Full-stack Web Developer specialized <br /> in React & Node.js. 
                            Building scalable <br /> applications with modern technology <br />
                            stacks.</p>
                             <motion.div
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.3, ease: "easeInOut" }}
>
                        <button className=" flex items-center gap-3 p-2 px-4 py-2 bg-[#10B981] hover:bg-green-700 text-white rounded-md transition mb-10">Download CV <FaArrowDown /></button>
                        </motion.div>
                    </div>
</motion.div>
           
                    
                    

                </div>
            </section>
        </div>
    )
}

export default Hero