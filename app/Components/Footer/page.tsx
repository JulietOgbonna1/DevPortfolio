'use client'
import Image from 'next/image'
import { useTheme } from "../themeContext";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { MdTerminal } from "react-icons/md";

const Footer = () => {
  const { lightMode } = useTheme();
  return (
    <section>
      <ul className='hidden md:flex items-center ml-10 gap-1 p-5 pb-10'>
        <li><Image width={30} height={30} src="/logo.png" alt="Logo" /></li>
        <li className='text-xl font-extrabold mr-80 hover:text-[#10B981]'>DevPortfolio</li>
        <li className='text-sm text-gray-400 mr-70 hover:text-white'>© 2026 DevPortfolio. All rights reserved.</li>
        <li className={`${lightMode ? 'bg-black' : ''} hover:bg-[#10B981]`}><a href="#"><Image width={30} height={30} src="/githubIcon.png" alt="Github icon" /></a></li>
        <li className={`${lightMode ? 'bg-black' : ''} hover:bg-[#10B981]`}><Image width={30} height={30} src="/whatsappicon.png" alt="Whatsapp icon" /></li>
        <li className={`${lightMode ? 'bg-black' : ''} hover:bg-[#10B981]`}><Image width={30} height={30} src="/facebook.png" alt="Facebook icon" /></li>
        <li className={`${lightMode ? 'bg-black' : ''} hover:bg-[#10B981]`}><Image width={30} height={30} src="/xicon.png" alt="X icon" /></li>
        <li className={`${lightMode ? 'bg-black' : ''} hover:bg-[#10B981]`}><Image width={30} height={30} src="/linkedin.png" alt="LinkedIn icon" /></li>
      </ul>

      <div className='block md:hidden  items-center ml-10 gap-1 p-5 pb-10'>
        <div className='flex gap-2 justify-center items-center'>
          <MdTerminal className='text-2xl text-[#10B981]'/>
          <h2 className='text-xl font-extrabold  hover:text-[#10B981]'>DevPortfolio</h2>
        </div>
         
        <p className='text-sm text-center text-gray-400 hover:text-white p-2'>© 2026 DevPortfolio. All rights reserved.</p>
      
      <ul className='flex  justify-center gap-3 text-2xl'>
         
        <li className={`${lightMode ? 'bg-white' : ''} hover:bg-[#10B981]`}><FaGithub /></li>
        <li className={`${lightMode ? 'bg-white' : ''} hover:bg-[#10B981]`}><FaWhatsapp /></li>
        <li className={`${lightMode ? 'bg-white' : ''} hover:bg-[#10B981]`}><FaFacebookF /></li>
        <li className={`${lightMode ? 'bg-white' : ''} hover:bg-[#10B981]`}><FaSquareXTwitter /></li>
        <li className={`${lightMode ? 'bg-white' : ''} hover:bg-[#10B981]`}><FaLinkedin /></li>
      </ul>
      </div>
    </section>
  )
}

export default Footer