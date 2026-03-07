'use client'
import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from  "../themeContext";

const About = () => {
     const { lightMode, toggleTheme } = useTheme();
    return (
        <section className='mt-35 mb-25 '>
 <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeInOut" }}
  viewport={{ once: true }}
>
            <div className="aboutcontainer hidden md:flex gap-35 items-center ml-15 ">
                <div>
                    <img src="/Developerportrait.png"
                    className='rounded-2xl'
                    width={500}
                     height={500} 
                    alt="Developer Image" />
                </div>
                <div>
                    <motion.div
        animate={{ y: [0, -12, 0], backgroundPosition: ["0%", "100%", "0%"] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className=" bg-linear-to-r from-white  via-teal-400 to-white bg-size-[200%_100%] bg-clip-text text-transparent"
      >
      <h2  className={`${lightMode ? 'text-black' : ''} text-3xl inline-block transition-colors duration-300`}>About Me</h2>
               <motion.span
  animate={{ x: [0, 50, 0] }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="block absolute  w-20 h-1 bg-[#10B981] mt-2 rounded "
/>
      </motion.div>
      
                    
                    <p className="text-gray-400 mt-5 mb-4 leading-7">I'm a passionate Full-stack Developer with over 5 years of <br />
                        experience building web applications. I love solving complex <br />
                        problems and turning ideas into polished products.</p>
                    <p className="text-gray-400 mb-4 leading-7">My approach combines technical excellence with a strong focus on user <br />
                        experience. I believe that good code is not just about functionality, but also <br />
                        about readability, scalability, and performance. When I'm not coding, you'll <br />
                        find me exploring new UI trends or contributing to open-source projects.</p>

                    <div className='flex gap-30'>
                        <div>
                            <h4 className='text-[#10B981] text-3xl mt-3'>50+ </h4>
                            <p className="text-gray-500">Projects Completed</p>
                        </div>
                        <div>
                            <h4 className='text-[#10B981] text-3xl mt-3'>5+ </h4>
                            <p className="text-gray-500">Years Experience</p>
                        </div>
                    </div>
                </div>
            </div>




            <div className="aboutcontainer flex flex-col md:hidden gap-25 ml-5 items-center ">
                <div>
                    <img src="/Developerportrait.png"
                    className='rounded-2xl w-11/12'
                    width={400}
                     height={400} 
                    alt="Developer Image" />
                </div>
                <div>
                    <motion.div
        animate={{ y: [0, -12, 0], backgroundPosition: ["0%", "100%", "0%"] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className=" bg-linear-to-r from-white  via-teal-400 to-white bg-size-[200%_100%] bg-clip-text text-transparent"
      >
      <h2  className={`${lightMode ? 'text-black' : ''} text-3xl inline-block transition-colors duration-300`}>About Me</h2>
               <motion.span
  animate={{ x: [0, 50, 0] }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="block absolute  w-20 h-1 bg-[#10B981] mt-2 rounded "
/>
      </motion.div>
      
                    
                    <p className="text-gray-400 mt-5 mb-4 leading-7 text-sm">I'm a passionate Full-stack Developer<br /> with over 5 years of 
                        experience building<br /> web applications. I love solving complex <br />
                        problems and turning ideas into polished <br /> products.</p>
                    <p className="text-gray-400 mb-4 leading-7 text-sm">My approach combines technical excellence <br /> with a strong focus on user 
                        experience. I <br />believe that good code is not just about <br /> functionality, but also 
                        about readability, <br />scalability, and performance. When I'm not <br />coding, you'll 
                        find me exploring new UI trends<br /> or contributing to open-source projects.</p>

                    <div className='flex gap-8'>
                        <div>
                            <h4 className='text-[#10B981] text-2xl mt-3'>50+ </h4>
                            <p className="text-gray-500 text-sm ">Projects Completed</p>
                        </div>
                        <div>
                            <h4 className='text-[#10B981] text-2xl mt-3 '>5+ </h4>
                            <p className="text-gray-500 text-sm">Years Experience</p>
                        </div>
                    </div>
                </div>
            </div>
            </motion.div>
        </section>
    )
}

export default About