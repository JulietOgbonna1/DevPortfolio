'use client'
import React from 'react'
import { motion } from "framer-motion";
import { useTheme } from "../themeContext";

const Experience = () => {
    const { lightMode } = useTheme();
    return (
        <section>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: true }}
            >
                <div className='hidden md:block ml-10'>
                    <h2 className='text-3xl mb-8'>Experience & Milestones</h2>
                    <div className='flex items-center gap-85'>
                        <div className='flex  gap-8 text-gray-400 pb-10'>
                            <div><input type="radio" /></div>
                            <div>
                                <h4 className={`text-2xl ${lightMode ? 'text-black' : 'text-white'} font-extrabold`}> Senior Web Developer</h4>
                                <p className='text-[#10B981] text-sm pb-3'>Global Tech Solutions • 2021 — Present</p>
                                <p>Leading the core design team for a SaaS platform used by over 1M+ users. Reduced user churn by 14% <br />
                                    through iterative React Native improvements.</p>
                            </div>
                        </div>
                        <div>
                            <span className='text-gray-300 text-sm bg-slate-700 p-2 rounded-3xl'>Abuja</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-81'>
                        <div className='flex gap-8 text-gray-400 pb-10'>
                            <div><input type="radio" /></div>
                            <div>
                                <h4 className={`text-2xl ${lightMode ? 'text-black' : 'text-white'} font-extrabold`}> Backend Web Developer</h4>
                                <p className='text-[#10B981] text-sm pb-3'>Creative Agency X • 2018 — 2021</p>
                                <p>Collaborated with diverse clients from fintech to fashion. Delivered over 40+  high-fidelity prototypes and<br />
                                    successful MVPs.</p>
                            </div>
                        </div>
                        <div>
                            <span className='text-gray-300 text-sm bg-slate-700 p-2 rounded-3xl'>Remote</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-82'>
                        <div className='flex  gap-8 text-gray-400 pb-10'>
                            <div><input type="radio" className={` ${lightMode ? 'bg-black' : 'bg-white'} font-extrabold`} /></div>
                            <div>
                                <h4 className={`text-2xl ${lightMode ? 'text-black' : 'text-white'} font-extrabold`}> Senior Web Developer</h4>
                                <p className='text-[#10B981] text-sm pb-3'>Print & Digital Studio • 2016 — 2018</p>
                                <p>Focused on brand identity and typography. Learned the foundations of visual hierarchy and color theory.</p>
                            </div>
                        </div>
                        <span className='text-gray-300 text-sm bg-slate-700 p-2 rounded-3xl'>Lagos</span>
                    </div>
                </div>



                <div className='md:hidden ml-5'>
                    <h2 className='text-2xl mb-8'>Experience & Milestones</h2>
                    <div className='flex items-center gap-85'>
                        <div className='flex gap-8 text-gray-400 pb-10'>
                            <div><input type="radio" /></div>
                            <div>
                                <h4 className={`text-2xl ${lightMode ? 'text-black' : 'text-white'} font-extrabold`}> Senior Web Developer</h4>
                                <p className='text-[#10B981] text-sm pb-3'>Global Tech Solutions • 2021 — Present</p>
                                <div className='mb-5'>
                                    <span className='text-gray-300 text-sm bg-slate-700 p-2 rounded-3xl'>Abuja</span>
                                    <p>Leading the core design team for a <br />SaaS platform used by over 1M+ users. Reduced user <br /> churn by 14% 
                                        through <br />iterative React Native improvements.</p>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='flex items-center gap-81'>
                        <div className='flex gap-8 text-gray-400 pb-10'>
                            <div><input type="radio" /></div>
                            <div>
                                <h4 className={`text-2xl ${lightMode ? 'text-black' : 'text-white'} font-extrabold`}> Backend Web Developer</h4>
                                <p className='text-[#10B981] text-sm pb-3'>Creative Agency X • 2018 — 2021</p>
                                <div className='mb-5'>
                            <span className='text-gray-300 text-sm bg-slate-700 p-2 rounded-3xl'>Remote</span>
                        </div>
                                <p>Collaborated with diverse clients from <br /> fintech to fashion. Delivered over 40+ <br /> high-fidelity prototypes and<br />
                                    successful MVPs.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='flex items-center gap-82'>
                        <div className='flex  gap-8 text-gray-400 pb-10'>
                            <div><input type="radio" className={` ${lightMode ? 'bg-black' : 'bg-white'} font-extrabold`} /></div>
                            <div>
                                <h4 className={`text-2xl ${lightMode ? 'text-black' : 'text-white'} font-extrabold`}> Senior Web Developer</h4>
                                <p className='text-[#10B981] text-sm pb-3'>Print & Digital Studio • 2016 — 2018</p>
                                <div className='mb-5'>
                                     <span className='text-gray-300 text-sm  bg-slate-700 p-2 rounded-3xl'>Lagos</span>
                                </div>
                                <p>Focused on brand identity and <br /> typography. Learned the foundations <br />of visual hierarchy and color theory.</p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Experience