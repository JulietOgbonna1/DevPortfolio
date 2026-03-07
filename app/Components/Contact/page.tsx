'use client'
import React from 'react'
import { LuSendHorizontal } from "react-icons/lu";
import { motion } from "framer-motion";
import { useTheme } from "../themeContext";

const Contact = () => {
  const { lightMode } = useTheme();
  return (
    <section className="flex flex-col items-center justify-center mt-20 ">
      <div className="container1 hidden md:block mb-30">
<motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          animate={{ y: [0, -12, 0], backgroundPosition: ["0%", "100%", "0%"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className=" bg-linear-to-r from-white  via-teal-400 to-white bg-size-[200%_100%] bg-clip-text text-transparent text-center"
        >
          <h2 className={`${lightMode ? 'text-black' : ''} text-3xl inline-block transition-colors duration-300`}>Get in Touch</h2>
          <motion.span
            animate={{ x: [0, 50, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="block absolute  w-20 h-1 bg-[#10B981] mt-2 rounded  left-1/3"
          />
        </motion.div>
        <p className='text-gray-400 pt-3 pb-10'>Have a project in mind or just want to say hi? Feel free to reach out!</p>
        <form action="post" className={` ${lightMode ? 'bg-white text-black shadow-2xl border-black' : 'bg-[#16232C] text-white'} 'bg-[#16232C] p-6 rounded-xl hover:bg-slate-700 transition `}>
          <label htmlFor="name" className='mr-50'>Name</label>
          <label htmlFor="email">Email</label> <br />
          <input type="text" id="name" name="name" required className={`${lightMode ? 'bg-gray-200 placeholder:text-black' : 'bg-slate-950'}  p-2 border border-gray-600 mt-3 placeholder:text-gray-400  placeholder:text-sm mb-5 transition-colors duration-300`} placeholder='John Doe' />


          <input type="email" id="email" name="email" required className={`${lightMode ? 'bg-gray-200 placeholder:text-black' : 'bg-slate-950'} p-2 border border-gray-600 mt-3 placeholder:text-gray-400  placeholder:text-sm ml-3 light:bg-gray-400`} placeholder='john@example.com' /> <br />

          <label htmlFor="message">Message</label> <br />
          <textarea id="message" name="message" required className={`${lightMode ? 'bg-gray-200 placeholder:text-black' : 'bg-slate-950'} p-2 border border-gray-600 mt-3  placeholder:text-sm placeholder:text-gray-400 w-full h-40 transition-colors duration-300`} placeholder='Enter Your Message'></textarea> <br />
          <button type="submit" className='flex gap-2 items-center bg-[#10B981] hover:bg-green-800 p-3 justify-center w-full mt-2 transition-all'>Send Message <LuSendHorizontal /></button>
        </form>
      </motion.div>
      </div>


      <div className="container2 md:hidden mb-10">
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          animate={{ y: [0, -12, 0], backgroundPosition: ["0%", "100%", "0%"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className=" bg-linear-to-r from-white  via-teal-400 to-white bg-size-[200%_100%] bg-clip-text text-transparent text-center"
        >
          <h2 className={`${lightMode ? 'text-black' : ''} text-2xl text-center inline-block transition-colors duration-300`}>Get in Touch</h2>
          <motion.span
            animate={{ x: [0, 50, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="block absolute  w-20 h-1 bg-[#10B981] mt-2 rounded  left-1/3"
          />
        </motion.div>
        <p className='text-gray-400 pt-3 pb-10 text-center text-sm'>Have a project in mind or just want to say hi? <br />Feel free to reach out!</p>

        <form action="post" className={` ${lightMode ? 'bg-white text-black shadow-2xl border-black' : 'bg-[#16232C] text-white'} flex flex-col gap-2 ml-3 mr-3 max-w-80 p-6 rounded-xl hover:bg-slate-700 transition `}>
          <label htmlFor="name" >Name</label>
          <input type="text" id="name" name="name" required className={`${lightMode ? 'bg-gray-200 placeholder:text-black' : 'bg-slate-950'}  p-2 border border-gray-600 mt-3 placeholder:text-gray-400  placeholder:text-sm mb-5 transition-colors duration-300`} placeholder='John Doe' />

          
          <label htmlFor="email">Email</label> 
          <input type="email" id="email" name="email" required className={`${lightMode ? 'bg-gray-200 placeholder:text-black' : 'bg-slate-950'} p-2 border border-gray-600 mt-3 placeholder:text-gray-400  placeholder:text-sm light:bg-gray-400`} placeholder='john@example.com' /> 

          <label htmlFor="message">Message</label> 
          <textarea id="message" name="message" required className={`${lightMode ? 'bg-gray-200 placeholder:text-black' : 'bg-slate-950'} p-2 border border-gray-600 mt-3  placeholder:text-sm placeholder:text-gray-400 w-full h-40 transition-colors duration-300`} placeholder='Enter Your Message'></textarea> 
          <button type="submit" className='flex gap-2 items-center bg-[#10B981] hover:bg-green-800 p-3 justify-center w-full mt-2 transition-all'>Send Message <LuSendHorizontal /></button>
        </form>
      </motion.div>
      </div>
    </section>
  )
}

export default Contact